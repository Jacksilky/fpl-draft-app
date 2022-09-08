const express = require('express');
const router = express.Router();
const Transaction = require('../../models/TransactionSchema');

// @route    POST api/transaction
// @desc     Create a transaction
// @access   Public
router.post('/', async (req, res) => {
      try {
        const newTransaction = new Transaction({
          proposer: req.body.proposer,
          receiver: req.body.receiver,
          status: req.body.status,
        });

        const post = await newTransaction.save();
        console.log("Posted new Transaction")
        res.json(post);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route    GET api/transaction/:id
// @desc     get transaction by id
// @access   Private between paticipants
router.get('/:id', async(req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
        .populate("proposer.user")
        .populate("proposer.items")
        .populate("receiver.user")
        .populate("receiver.items")
    if (!transaction) {
      res.status(404).json({message: `Transaction not found with id: ${req.params.id}`})
    }else {
      res.json(transaction)
    }
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/transaction/userId
// @desc     get all transactions by username
// @access   All
router.get('/search/:userid', async(req, res) => {
  try {
    console.log(req.params.username)
    const transaction = await Transaction.find()
      .or([{'proposer.user': req.params.userid}, {'receiver.user': req.params.userid}])
      .populate("proposer.user")
      .populate("proposer.items")
      .populate("receiver.user")
      .populate("receiver.items")
    res.json(transaction)

  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/transaction/:id
// @desc     delete transaction by id
// @access   Private between paticipants
router.delete('/:id', async(req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id)
    res.json({message: `Transaction deleted`})
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    PUT api/transaction/:id
// @desc     Update by ID
// @access   Private/Owner
router.put('/:id', async(req, res) => {
  try {
    await Transaction.findByIdAndUpdate(req.params.id, req.body)
    res.json(req.body)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router;


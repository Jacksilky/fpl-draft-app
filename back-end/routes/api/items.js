const express = require('express');
const router = express.Router();
const Item = require('../../models/ItemSchema');

// @route    POST api/item
// @desc     Create a item
// @access   Public
router.post('/', async (req, res) => {
      try {
        // const user = await User.findById(req.user.id).select('-password');
        const newItem = new Item({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          graded: req.body.graded,
          grade: req.body.grade,
          gradingCompany: req.body.gradingCompany,
          owner: req.body.owner,
          tags: req.body.tags
        });

        const post = await newItem.save();
        console.log("Posted new Item")
        res.json(post);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route    GET api/item
// @desc     get all items
// @access   All
router.get('/', async(req, res) => {
  try {
    const items = await Item.find().sort({ dateAdded: -1 });
    console.log("Get routes")
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/item/:id
// @desc     get all item by id
// @access   All
router.get('/:id', async(req, res) => {
  try {
    const item = await Item.findById(req.params.id)

    if (!item) {
      res.status(404).json({message: `Item not found with id: ${req.params.id}`})
    }else {
      res.json(item)
    }

  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/item/userId
// @desc     get all items by username
// @access   All
router.get('/search/:username', async(req, res) => {
  try {
    console.log(req.params.username)
    const item = await Item.find({'owner.username': req.params.username})
    res.json(item)

  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/item/:id
// @desc     get item by id
// @access   Private/Owner
router.delete('/:id', async(req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id)
    res.json({message: `Item deleted`})
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    PUT api/item/:id
// @desc     Update item by ID
// @access   Private/Owner
router.put('/:id', async(req, res) => {
  try {
    await Item.findByIdAndUpdate(req.params.id, req.body)
    res.json(req.body)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router;


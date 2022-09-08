const express = require('express');
const router = express.Router();
const User = require('../../models/UserSchema');

// @route    POST api/user
// @desc     Create a user
// @access   Public
router.post('/', async (req, res) => {
  const {username, firstName, surname, address, email,
        password, rating, reviews, avatar, dateJoined} = req.body;

  try {
    user = await User.findOne({email});

    if(user){
      return res.status(400).json({errors :[{msg: 'User already exists'}]})
    }

    newUser = new User({
        username, firstName, surname, address, email,
        password, rating, reviews, avatar, dateJoined
    })


    const post = await newUser.save();
    console.log("Posted new User")
    res.json(post);

  } catch(err) {
    console.error(err)
    res.status(500).send('Server error')
  }
});


// @route    PUT api/user/:id
// @desc     Update User by ID
// @access   Private/Owner
router.put('/:id', async(req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.json(req.body)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/user
// @desc     get a user by id
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    user = await User.findById(req.params.id);

    if(!user){
      return res.status(400).json({errors :[{msg: 'Cannot find user'}]})
    }else{
      res.json(user)
    }
  } catch(err) {
    console.error(err)
    res.status(500).send('Server error')
  }
});

module.exports = router;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  address: {
    houseNo: {
        type: Number,
        required: true
    },
    addressOne: {
        type: String,
        required: true
    },
    addressTwo: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required: true
  },
  reviews:[{
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      user: {
        type: String,
        required: true
      }
  }],
  avatar: {
    type: String
  },
  dateJoined: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
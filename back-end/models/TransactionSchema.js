const mongoose = require('mongoose');
const User = require('./UserSchema');
const Item = require('./ItemSchema');


const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  proposer: { 
    user: {
      type: Schema.Types.ObjectId, 
      ref: User, 
      required: true 
    },
    items: [{
      type: Schema.Types.ObjectId, 
      ref: Item, 
      required: true 
    }],
    money: {
      type: Number,
      default: 0
    }
  },
  receiver: { 
    user: {
      type: Schema.Types.ObjectId, 
      ref: User, 
      required: true 
    },
    items: [{
      type: Schema.Types.ObjectId, 
      ref: Item, 
      required: true 
    }]
  },
  review: {
    body: String,
    rating: Number
  },
  dateCreated: { 
    type: Date, 
    default: Date.now,
    required: true
   },
   dateAccepted: Date,
   dateFulfilled: Date, 
   status: {
     type: String,
     required: true
   }
})

module.exports = mongoose.model('transaction', TransactionSchema);
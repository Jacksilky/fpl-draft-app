const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  graded: {
    type: Boolean,
    default: false,
    required: true
  },
  grade: Number,
  gradingCompany: String,
  owner: {
    type: {
      userId: mongoose.Types.ObjectId,
      username: String,
      rating: Number,
    },
    required: true
  },
  tags: [String],
  dateAdded: { 
    type: Date, 
    default: Date.now,
    required: true
   }
})

module.exports = mongoose.model('item', ItemSchema);
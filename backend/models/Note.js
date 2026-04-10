const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: ''
  },
  content: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#fff'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', noteSchema);
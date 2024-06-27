const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    // unique: true
  },
  color: {
    type: String,
    required: true
  }
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;

const mongoose = require('mongoose')

const toppingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rewardPointsCOST: {
    type: Number,
    required: true
  },
  rewardPointsADD: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Topping', toppingSchema);
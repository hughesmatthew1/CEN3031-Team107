const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  macronutrients: {
    calories: {
      type: Number,
      required: true
    },
    fats: {
      type: Number,
      required: true
    },
    carbs: {
      type: Number,
      required: true
    },
    protein: {
      type: Number,
      required: true
    }
  },
  allergens: {
    type: String,
    default: 'None'
  },
  rewardsPointsCOST: {
    type: Number,
    required: true
  },
  rewardsPointsADD: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
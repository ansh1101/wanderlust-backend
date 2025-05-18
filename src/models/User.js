
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    age: Number,
    interests: [String],
    budget: Number,
    preferredClimate: {
      type: String,
      enum: ['cold', 'hot', 'moderate'],
    },
    travelHistory: [String],
    tripDuration: Number,
  }, { timestamps: true });

  
module.exports = mongoose.model('User', userSchema)
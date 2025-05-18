const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  climate: String,
  tags: [String], // e.g., ['nature', 'history']
  averageCost: Number,
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);

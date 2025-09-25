// backend/src/models/ComponentModel.js
const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a component name'],
    trim: true,
  },
  sku: {
    type: String,
    required: [true, 'Please add a SKU'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
  },
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('Component', ComponentSchema);
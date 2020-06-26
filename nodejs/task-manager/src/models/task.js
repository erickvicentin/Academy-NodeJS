// @node_modules
const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
  description: {
    required: true,
    trim: true,
    type: String,
  },
  completed: {
    default: false,
    type: Boolean,
  },
});

module.exports = Task;

// @node_modules
const mongoose = require('mongoose');

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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

module.exports = Task;

// @node_modules
const mongoose = require('mongoose');

const taskSchemma = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchemma);

module.exports = Task;

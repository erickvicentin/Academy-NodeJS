const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    required: true,
    trim: true,
    type: String,
  },
  email: {
    lowercase: true,
    required: true,
    type: String,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email format not valid');
      }
    },
  },
  age: {
    default: 0,
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
  country: {
    default: 'argentina',
    lowercase: true,
    trim: true,
    type: String,
  },
  password: {
    minlength: 6,
    required: true,
    trim: true,
    type: String,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error(`The password cant be 'password'.`);
      }
    },
  },
});

module.exports = User;

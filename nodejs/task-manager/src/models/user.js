// @node_modules
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const validator = require('validator');

// @app_modules
const Task = require('./task');

const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: Buffer,
    },
    name: {
      required: true,
      trim: true,
      type: String,
    },
    email: {
      lowercase: true,
      required: true,
      unique: true,
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
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Delete user tasks then user is removed
userSchema.pre('remove', async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});

// Virtual relation tasks- users
userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner',
});

// Send the public data of user
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

// Verify if the token is correct
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'task-app-vicerick');

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// Login with correct credentials
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

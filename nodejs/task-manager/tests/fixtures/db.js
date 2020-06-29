// @Node_modules
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// @App_modules
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

// @Own_constants
const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

// @Users
const userOneID = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneID,
  name: 'User',
  email: 'user@test.com',
  password: 'test123!!',
  tokens: [{ token: jwt.sign({ _id: userOneID }, process.env.JWT_TOKEN) }],
};

const userTwoID = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoID,
  name: 'Mike',
  email: 'mike@mead.com',
  password: 'myPass@@WoW',
  tokens: [{ token: jwt.sign({ _id: userTwoID }, process.env.JWT_TOKEN) }],
};

// @Tasks
const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: 'First task',
  completed: false,
  owner: userOne._id,
};
const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Second task',
  completed: true,
  owner: userOne._id,
};
const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Third task',
  completed: true,
  owner: userTwo._id,
};

module.exports = {
  userOne,
  userOneID,
  userTwo,
  userTwoID,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase,
};

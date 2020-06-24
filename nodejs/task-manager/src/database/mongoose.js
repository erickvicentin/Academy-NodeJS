// @node_modules
const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// @mongoose_models
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
    required: true,
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

/* 
// DATE
const aa = new Date().getFullYear();
const mm = new Date().getMonth();
const dd = new Date().getDate();
const now = `${dd}-${mm}-${aa}`; 
*/

const taskToDo = new Task({
  description: 'Doblar la ropa',
});

taskToDo
  .save()
  .then((task) => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });

/* const me = new User({
  name: 'Erick   ',
  age: 23,
  email: '  ERICK.VICENTIN@GLOBANT.COM      ',
  password: 'ContraseñaDeEjemplo',
  country: 'Argelia',
});

me.save()
  .then(() => {
    console.log(`Resultado: ${me}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  }); */

// @node_modules
const express = require('express');
const Task = require('./models/task');
const User = require('./models/user');
require('./database/mongoose');

// @app_constants
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.status(202).send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/users/:id', (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((user) => {
      if (!user) {
        res.status(404).send();
      }

      res.status(202).send(user);
    })
    .catch((error) => res.status(500).send());
});

app.post('/tasks', (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then((task) => {
      res.status(201).send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/tasks', (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.status(202).send(tasks);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((task) => {
      if (!task) {
        res.status(404).send();
      }

      res.status(202).send(task);
    })
    .catch((error) => res.status(500).send());
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

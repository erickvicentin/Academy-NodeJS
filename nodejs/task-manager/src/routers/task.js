// @node_modules
const express = require('express');

// @app_modules
const Task = require('../models/task');

// @own_constants
const router = new express.Router();

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(202).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) res.status(404).send();
    res.status(202).send(task);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  const allowedUpdates = ['description', 'completed'];
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid update!' });
  }

  try {
    const task = await Task.findById(_id);
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    //const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true,});

    if (!task) {
      return res.status(404).send();
    }

    res.status(202).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

// @node_modules
const express = require('express');

// @app_modules
const User = require('../models/user');
const auth = require('../middleware/auth');

// @own_constants
const router = new express.Router();

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login session (created token)
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});

// Logout current sessions (deleted current tokens)
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// Logout of all sessions (deleted all tokens)
router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// User profile (current session)
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

// Get user by id
router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) res.status(404).send();
    res.status(202).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update user data by id
router.patch('/users/:id', async (req, res) => {
  const _id = req.params.id;
  const allowedUpdates = ['name', 'password', 'age', 'email'];
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) => {
    allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid update!' });
  }

  try {
    const user = await User.findById(_id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    //const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});

    if (!user) {
      return res.status(404).send();
    }

    res.status(202).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete user data by id
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

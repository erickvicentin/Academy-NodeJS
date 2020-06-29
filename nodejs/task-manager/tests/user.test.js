// @Node_modules
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const request = require('supertest');

// @App_modules
const app = require('../src/app');
const User = require('../src/models/user');

// @Own_constants
const userOneID = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneID,
  name: 'User',
  email: 'user@test.com',
  password: 'test123!!',
  tokens: [{ token: jwt.sign({ _id: userOneID }, process.env.JWT_TOKEN) }],
};

// @Global_functions
beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('Should sign up a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Andrew',
      email: 'andrew@mead.io',
      password: 'MyPass777!',
    })
    .expect(201);
});

test('Should login existing user', async () => {
  const response = await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      name: 'User',
      email: 'user@test.com',
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe('test123!!');

  const _user = await User.findById(userOneID);
  expect(response.body.token).toBe(_user.tokens[1].token);
});

test('Should not login non existent user.', async () => {
  await request(app)
    .post('/users/login')
    .send({
      name: userOne.name,
      email: 'fakemail@test.com',
      password: userOne.password,
    })
    .expect(404);
});

test('Should get profile for user.', async () => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test('Should not get profile for unauthorized user.', async () => {
  await request(app).get('/users/me').send().expect(401);
});

test('Should delete account for user.', async () => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  const user = await User.findById(userOneID);
  expect(user).toBeNull();
});

test('Should not delete account for unauthenticated user.', async () => {
  await request(app).delete('/users/me').send().expect(401);
});

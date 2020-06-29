// @Node_modules
const request = require('supertest');

// @App_modules
const app = require('../src/app');
const User = require('../src/models/user');
const { setupDatabase, userOne, userOneID } = require('./fixtures/db');

// @Global_functions
beforeEach(setupDatabase);

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
      name: userOne.name,
      email: userOne.email,
    },
    token: user.tokens[1].token,
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

test('Should upload avatar image', async () => {
  await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('avatar', 'tests/fixtures/profile-pic.jpg')
    .expect(200);

  const user = await User.findById(userOneID);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

// @Challenge
test('Should update valid user fields', async () => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({ name: 'Erick' })
    .expect(200);

  const user = await User.findById(userOneID);
  expect(user.name).toBe('Erick');
});

// @Challenge
test('Should not update invalid user fields', async () => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({ location: 'Chaco' })
    .expect(400);
});

// @Node_modules
const request = require('supertest');

// @App_modules
const app = require('../src/app');
const Task = require('../src/models/task');
const {
  setupDatabase,
  userOne,
  userOneID,
  userTwo,
  userTwoID,
  taskOne,
  taskThree,
  taskTwo,
} = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task for user', async () => {
  const response = await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: 'From my test',
    })
    .expect(201);

  const task = await Task.findById(response.body._id);

  // Check if the task exist and are saved
  expect(task).not.toBeNull();
  // Check if the task have default value on completed field (false)
  expect(task.completed).toEqual(false);
});

// @Challenges
test('Should read all task for user One', async () => {
  const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toBe(2);
});

test('The userTwo should not delete the firs task(because the owner is userOne', async () => {
  const response = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404);
  const task = await Task.findById(taskOne._id);
  expect(task).not.toBeNull();
});

// @node_modules
const express = require('express');
require('./database/mongoose');

// @app_modules
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

// @app_constants
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Clear Console after save changes
console.clear();

module.exports = app;

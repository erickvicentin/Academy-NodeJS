// @node_modules
const express = require('express');
require('./database/mongoose');

// @app_modules
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

// @app_constants
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Clear Console after save changes
console.clear();

app.listen(port, () => {
  console.log(
    `
Created by Erick Vicentin. Using Node.js with Express.js and MongoDB

-------------------- Server is up on port ${port} ---------------------
`
  );
});

// @node_modules
const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
require('./database/mongoose');

// @app_constants
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

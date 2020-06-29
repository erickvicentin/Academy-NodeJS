// @app_modules
const app = require('./app');

// @own_constants
const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `
Created by Erick Vicentin. Using Node.js with Express.js and MongoDB

-------------------- Server is up on port ${port} ---------------------
`
  );
});

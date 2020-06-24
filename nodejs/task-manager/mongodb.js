// @node_modules
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// @app_constants
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      console.log('Succesfull conected to database');
    }

    // Create Read Update & Delete
    const db = client.db(databaseName);

    db.collection('users')
      .deleteMany({ age: 27 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

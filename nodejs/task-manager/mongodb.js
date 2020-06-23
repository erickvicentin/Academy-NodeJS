// @node_modules
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const objectID = mongodb.ObjectID;

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
  }
);

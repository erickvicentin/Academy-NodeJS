// @node_modules
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const objectID = mongodb.ObjectID;

const id = new objectID();
console.log(id);
console.log(id.getTimestamp());

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

    db.collection('users').insertOne(
      {
        _id: id,
        name: 'Hercules',
        age: 29,
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert document.');
        }

        console.log(result.ops);
      }
    );

    /* db.collection('users').insertMany(
      [
        {
          name: 'Juani',
          age: 2,
        },
        {
          name: 'Lucy',
          age: 10,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert documents!');
        }

        console.log(result.ops);
      }
    ); */

    /* db.collection('tasks').insertMany(
      [
        { description: 'Finish the nodejs course', completed: false },
        { description: 'Buy a new shoes', completed: false },
        { description: 'Read a book', completed: true },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks');
        }

        console.log(result.ops);
      }
    ); */
  }
);

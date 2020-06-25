require('../task-manager/src/database/mongoose');
const Task = require('../task-manager/src/models/task');

Task.findByIdAndDelete('5ef3bf87b26a6029dc631419')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

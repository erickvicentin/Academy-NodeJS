require('../task-manager/src/database/mongoose');
const Task = require('../task-manager/src/models/task');
const User = require('../task-manager/src/models/user');

/* Task.findByIdAndDelete('5ef3bf87b26a6029dc631419')
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
 */

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5ef3bce9bb07611ec89ca216', 23)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5ef3bf79b26a6029dc631418')
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

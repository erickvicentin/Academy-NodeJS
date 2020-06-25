const jwt = require('jsonwebtoken');

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'mynewcourse', {
    expiresIn: '7 days',
  });
  console.log(token);

  const data = jwt.verify(token, 'mynewcourse');
  console.log(data);
};

myFunction();

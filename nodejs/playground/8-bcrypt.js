const bcrypt = require('bcryptjs');

const myFunction = async () => {
  const pass = 'Red1234!';
  const hashedPass = await bcrypt.hash(pass, 8);

  console.log(pass);
  console.log(hashedPass);

  const isMatch = await bcrypt.compare('Red1234!', hashedPass);
  console.log(isMatch);
};

myFunction();

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([1, 3, 5]);
    reject('Things went wrong');
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log('Success!', result);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });

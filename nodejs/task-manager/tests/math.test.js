const { celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../math');

//

test('Should convert 32 F to 0 C', () => {
  const result = celsiusToFahrenheit(0);

  expect(result).toBe(32);
});

test('Should convert 0 C to 32 F', () => {
  const result = fahrenheitToCelsius(32);

  expect(result).toBe(0);
});

/* test('Async test demo', (done) => {
  setTimeout(() => {
    expect(2).toBe(2);
    done();
  });
}); */

test('should add 2 numbers', (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test('should add 2 numbers', async () => {
  const sum = await add(2, 3);
  expect(sum).toBe(5);
});

const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../math');

//

test('Should convert 32 F to 0 C', () => {
  const result = celsiusToFahrenheit(0);

  expect(result).toBe(32);
});

test('Should convert 0 C to 32 F', () => {
  const result = fahrenheitToCelsius(32);

  expect(result).toBe(0);
});

// Goal: Test temperature conversion functions
//
// 1. Export both functions and load them into test suite
// 2. Create "Should convert 32 F to 0 C"
// 3. Create "Should convert 0 C to 32 F"
// 4. Run the Jest to test your work!

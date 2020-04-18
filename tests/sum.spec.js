const sum = require('./sum');

test('correctly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(3, -2)).toBe(1);
});
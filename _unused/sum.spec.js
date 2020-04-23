const sum = require('./sum');

describe('Making sure Jest works', () => {
  it('correctly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, -2)).toBe(1);
  });
});
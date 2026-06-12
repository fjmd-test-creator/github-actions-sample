const add = require('./index');

test('1 + 2 は 4 になる', () => {
  expect(add(1, 2)).toBe(4);
});

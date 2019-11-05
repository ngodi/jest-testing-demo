const capitalize = require('./capitalize');

test('should Capitalize the string', () => {
  expect(capitalize('word')).toBe('Word');
});
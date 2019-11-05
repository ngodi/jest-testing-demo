import {reverseString, capitalize, sum} from './functions';

test('should Capitalize the string', () => {
    expect(capitalize('word')).toBe('Word');
  });

test('should reverse the string', () => {
expect(reverseString('word')).toBe('drow');
});

test('1 + 2 should equal 3', () => {
expect(sum(1, 2)).toBe(3);
});
import {reverseString, capitalize, caesarCipher, calculator} from './functions';

test('should Capitalize the string', () => {
    expect(capitalize('word')).toBe('Word');
  });

test('should reverse the string', () => {
expect(reverseString('word')).toBe('drow');
});

test('1 + 2 should equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('3 - 1 should equal 2', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
});

test('4/2 to equal 2', () => {
    expect(calculator.divide(4, 2)).toBeCloseTo(2);
})
test('4*2 to equal 2', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
})

test('encrypts welcome to ygneqog', () => {
    expect(caesarCipher.cipher('welcome', 2)).toBe('ygneqog');
})
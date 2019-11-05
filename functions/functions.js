const reverseString = string => string.split('').reverse().join('');
const capitalize = (string) =>  string[0].toUpperCase() + string.slice(1);
const sum = (a, b) => a + b;

export {reverseString, capitalize, sum}
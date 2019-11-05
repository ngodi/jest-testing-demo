const reverseString = string => string.split('').reverse().join('');
const capitalize = (string) =>  string[0].toUpperCase() + string.slice(1);
const calculator =  {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
  };

export {reverseString, capitalize, calculator}
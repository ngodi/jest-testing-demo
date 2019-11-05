const reverseString = string => string.split('').reverse().join('');
const capitalize = (string) =>  string[0].toUpperCase() + string.slice(1);
const calculator =  {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
  };
const caesarCipher = {
   cipher: (str, key) => {
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let cipherText = [];
    str.toLowerCase().split('').forEach(a => {
    let initIndex = abc.indexOf(a);
    let finIndex = (initIndex + key) % 26;
    cipherText.push( abc[finIndex]);
      });
             return cipherText.join().replace(/,/g,'');
        },
   decipher: (encryptedText, key) => {
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let decryptedText = [];
    encryptedText.toLowerCase().split('').forEach(a => {
    let initIndex = abc.indexOf(a);
    let finIndex = (initIndex - key) % 26;
    decryptedText.push(abc[finIndex]);
      });
             return decryptedText.join().replace(/,/g,'');
        },
           
   };

export {reverseString, capitalize, calculator, caesarCipher }
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
    let uabc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let cipherText = [];
    str.split('').forEach(a => {
    if((/\W/g).test(a)){
    cipherText.push(a);
    }
   else if(a == a.toUpperCase()){
      let initIndex = uabc.indexOf(a);
      let finIndex = (initIndex + key) % 26;
      cipherText.push( uabc[finIndex]);
    }else if(a == a.toLowerCase()){
      let initIndex = abc.indexOf(a);
      let finIndex = (initIndex + key) % 26;
      cipherText.push( abc[finIndex]);
    }
     });
             return cipherText.join().replace(/,/g,'');
        },
   decipher: (encryptedText, key) => {
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let uabc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let decryptedText = [];
    encryptedText.split('').forEach(a => {
      if((/\W/).test(a)){
        decryptedText.push(a);
       }
      else if(a == a.toUpperCase()){
        let initIndex = uabc.indexOf(a);
        let finIndex = (initIndex - key) % 26;
        decryptedText.push(uabc[finIndex]);
      }else if(a == a.toLowerCase()){
        let initIndex = abc.indexOf(a);
        let finIndex = (initIndex - key) % 26;
        decryptedText.push(abc[finIndex]);
      }
      });
       return decryptedText.join().replace(/,/g,'');       
    },           
   };

   const analyze = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = array.reduce(reducer)
      return {
          average: Math.floor(sum/array.length),
          min: Math.min(...array),
          max: Math.max(...array),
          length: array.length
      };
  }

export {reverseString, capitalize, calculator, caesarCipher, analyze  }
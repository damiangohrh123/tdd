function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  if (string.length === 0) {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]; 
  }
  return reversedString;
}

class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }
}

function caesarCipher(string, shiftFactor) {

  let shiftedString = '';

  for (let i = 0; i < string.length; i++) {
    // Get charcode
    let letterCharCode = string.charCodeAt(i);

    // Make sure only letters present
    if (letterCharCode >= 97 && letterCharCode <= 122) {
      // Add shiftFactor to letterCharCode
      letterCharCode += shiftFactor;

      // Wrap around if letterCharCode goes beyond 'z'
      if (letterCharCode > 122) {
        letterCharCode = 96 + (letterCharCode % 122);
      }

      const shiftedLetter = String.fromCharCode(letterCharCode);
      shiftedString += shiftedLetter;
    } else {
      shiftedString += '';
    }
  }

  return shiftedString;
}

function analyzeArray(array) {
  // Calculate average
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / array.length;

  // Calculate minimum value
  let min = array[0];
  for (const value of array) {
    if (value < min) {
      min = value;
    }
  }

  // Calculate the maximum value
  let max = array[0];
  for (const value of array) {
    if (value > max) {
      max = value;
    }
  }

  return {
    average: average,
    min: min,
    max: max,
    length: array.length
  }
}

module.exports = {
  sum,
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray
};
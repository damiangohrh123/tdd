const code = require('./code');

// Test sum function
test('adds 1 + 2 to equal 3', () => {
  expect(code.sum(1, 2)).toBe(3);
})

// Test capitalize function
test('capitalize first letter in string', () => {
  expect(code.capitalize("happy")).toEqual("Happy");
})

// Test reverse function
test('reverse string', () => {
  expect(code.reverseString("happy")).toEqual("yppah");
})

// Test calculator object
describe('Calculator', () => {
  const calculator = new code.Calculator();

  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtracts 3 - 2 to equal 1', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  test('multiplies 3 * 2 to equal 6', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });
})

// Test caesarCipher function
describe('caesarCipher', () => {
  test('shifting letters', () => {
    expect(code.caesarCipher("happy", 1)).toEqual("ibqqz");
  });

  test('wrapping around', () => {
    expect(code.caesarCipher("wxyz", 1)).toEqual("xyza");
  });

  test('punctuations', () => {
    expect(code.caesarCipher("a,b.c/d", 1)).toEqual("bcde");
  });
})

// Test analyzeArray
describe('analyzeArray', () => {
  test('average', () => {
    expect(code.analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4,
                                                      "min": 1,
                                                      "max": 8,
                                                      "length": 6});
  });
})


 
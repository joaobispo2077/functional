function sumNumbers(number) {

  return function (secondNumber) {

    return function (thirdNumber = 0) {

      return number + secondNumber + thirdNumber;

    }
  }
}


const resultSumNumbers = sumNumbers(5)(5)(5);
console.log(resultSumNumbers);

const multiple = (a, b) => a * b;
const sum = (a, b) => a + b;

const calculate = (x) => (y) => (fn) => {
  return fn(x, y);
}

console.log(calculate(2)(3)(multiple));

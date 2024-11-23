/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function toFind(number1, number2) {
    let numbers = [];
    for (let i = number1; i <= number2; i++) {
      let flag = 0;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        numbers.push(i);
      }
    }
    return numbers;
  };
};

/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n);
  let digits = n.toString().split('');
  let sum = 0;
  sum = digits.reduce((sum, digits) => sum + Number(digits), 0);
  return sum;
};

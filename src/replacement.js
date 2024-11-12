/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i]);
    arr[i] = arr[i].toString();
    switch (arr[i].length) {
      case 1:
        arr[i] = 1;
        break;
      case 2:
        arr[i] = 2;
        break;
      case 3:
        arr[i] = 3;
        break;
      default:
        arr[i] = 4;
        break;
    }
  }
  return arr;
};

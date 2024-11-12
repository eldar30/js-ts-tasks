/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      count++;
    }
  }
  return count;
};

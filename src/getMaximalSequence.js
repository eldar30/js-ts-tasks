/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxLength = 1;
  let currentLength = 1;
  let maxSequence = [arr[0]];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentLength++;
      currentSequence.push(arr[i]);
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxSequence = currentSequence.slice();
      }
      currentLength = 1;
      currentSequence = [arr[i]];
    }
  }
  if (currentLength > maxLength) {
    maxSequence = currentSequence;
  }
  return maxSequence;
};

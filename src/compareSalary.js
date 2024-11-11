/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  if (firstSalary > secondSalary && firstSalary > thirdSalary && secondSalary < thirdSalary) {
    let max = firstSalary;
    let min = secondSalary;
  } else if (secondSalary > firstSalary && secondSalary > thirdSalary && firstSalary < thirdSalary) {
    max = secondSalary;
    min = firstSalary;
  } else if (firstSalary > secondSalary && firstSalary > thirdSalary && secondSalary > thirdSalary) {
    max = firstSalary;
    min = thirdSalary;
  } else if (secondSalary > firstSalary && secondSalary > thirdSalary && firstSalary > thirdSalary) {
    max = secondSalary;
    min = thirdSalary;
  } else if (thirdSalary > firstSalary && thirdSalary > secondSalary && firstSalary > secondSalary) {
    max = thirdSalary;
    min = secondSalary;
  } else if (thirdSalary > firstSalary && thirdSalary > secondSalary && firstSalary < secondSalary) {
    max = thirdSalary;
    min = firstSalary;
  } else {
    return 0;
  }
  return max - min;
};

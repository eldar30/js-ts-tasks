/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  return function formatAddress(object) {
    let addres = '';
    for (let i = 0; i < order.length; i++) {
      addres += object[order[i]] + ', ';
    }
    return addres.slice(0, addres.length - 2);
  };
};

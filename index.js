/**
 * Add or remove item from Set
 *
 * @param {Set} set Set with values needs to toggle
 * @param {*} value Value to toggle in `set`
 * @return {Set} New set with or without `value`
 *
 * @example
 * toggleInSet(new Set([1, 2, 3]), 2)
 * //=> Set(2) {1, 3}
 *
 * @example
 * toggleInSet(new Set([1, 2, 3]), 4)
 * //=> [1, 2, 3, 4]
 * //=> Set(4) {1, 2, 3, 4}
 */
function toggleInSet(set, value) {
  var result = new Set(set);

  if (result.has(value)) {
    result.delete(value);
  } else {
    result.add(value);
  }

  return result;
}

module.exports = toggleInSet;

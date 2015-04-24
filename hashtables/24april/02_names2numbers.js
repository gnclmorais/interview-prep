/**
 * Implementation number 2: using an array of arrays [[key, value]].
 */
module.exports = (function names2numbers () {
  return function (word) {
    function bigNumber(numZeros) {
      return Number('1' + Array(numZeros + 1).join('0'));
    }

    return word.split('').reverse().reduce(function (acc, cur, idx) {
      return acc + cur.charCodeAt(0) * bigNumber(idx);
    }, 0);
  };
}());

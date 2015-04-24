/**
 * Implementation number 2: using an array of arrays [[key, value]].
 */
module.exports = (function names2numbers () {
  return function (word) {
    // Generates numbers like 10 or 1000000, providing the number of 0s.
    function bigNumber(numZeros) {
      return Number('1' + Array(numZeros + 1).join('0'));
    }

    // Splits the words, reverses it, and sums every character code
    // multiplied by a number with the same order or greatness as
    // the charecter's index.
    return word.split('').reverse().reduce(function (acc, cur, idx) {
      return acc + cur.charCodeAt(0) * bigNumber(idx);
    }, 0);
  };
}());

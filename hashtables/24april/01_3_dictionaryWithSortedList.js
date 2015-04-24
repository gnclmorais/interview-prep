/**
 * Implementation number 3: sorted list of {key: 'foo', value: 'bar'} pairs.
 */

module.exports = (function dictionarySorted () {
  // Entries will be saved as lists as well: {key: 'foo', value: 'bar'}
  this._table = [];

  /**
   * Private search method.
   * @param  {String} key The key to search for.
   * @return {Number}     The index of the key found (or -1 if not found).
   */
  function _search (key) {
    _table.forEach(function (row, index) {
      if (row.key === key) {
        return index;
      }
    });

    // If not found, return an invalid index.
    return -1;
  }

  /**
   * Private search method, this time using a binary search approach.
   * @param  {String} key The key to search for.
   * @return {Number}     The index of the key found (or -1 if not found).
   */
  function _binarySearch (key) {
    var length = _table.length;
    var last = length - 1;

    if (length) {
      var start = 0;
      var end = last;
      do {
//console.log('>> Start & end:', start, end);
        // Get the middle index
        var middle = start + Math.ceil((end - start) / 2);
//console.log('>> Middle:', middle);
        // Get the middle item using the middle index
        var tmp = _table[middle];
//console.log('>> @ middle:', tmp);
        // If key is bigger, keep looking on the right half;
        // If key is smaller, keep looking on the left half;
        // If equal, we found our element!
        // Keep doing this until start & end meet but no match is found.
        if (key > tmp.key) {
          start = middle + 1;
        } else if (key < tmp.key) {
          end = middle - 1;
        } else {
          return middle;
        }
//console.log('>> Next start & end:', start, end);
//console.log('\n');
      } while (start <= end);
    }

    // If not found, return an invalid index.
    return -1;
  }

  /**
   * Adds a key-value pair. Overrides value if already exists.
   * @param {String}   key   Key of the pair (the hash).
   * @param {Anything} value Value to store.
   * @chainable
   */
  function add (key, value) {
    if (typeof key !== 'string') {
      return;
    }

    var index = _binarySearch(key);
    var row = {'key': key, 'value': value};
    // If found, replace; if not found, get the right index where to include it
    if (index > -1) {
      _table[index] = row;
    } else {
      var i = 0;
      while (_table[i] && _table[i].key < key) {
        i += 1;
      }
      _table.splice(i, 0, row);
    }

    return;
  }

  /**
   * Searchs & returns the value of the provided key.
   * @param  {String} key Hash to look for on the dictionary.
   * @return {Anything}   The stored value for the provided key
   *                      (or undefined if not found).
   */
  function get (key) {
    if (typeof key !== 'string') {
      return;
    }

    var index = _binarySearch(key);
    return index > -1 ? _table[index].value : undefined;
  }

  /**
   * Removes the key provided and its value.
   * @param  {String} key Key (hash) to look for & remove from the dictionary.
   * @chainable
   */
  function remove (key) {
    if (typeof key !== 'string') {
      return;
    }

    var index = _binarySearch(key);
    if (index > -1) {
      _table.splice(index, 1);
    }

    return this;
  }

  /**
   * Public methods
   */
  return {
    'add_key_value_pair': add,
    'get_value': get,
    'remove_key': remove
  };
}());

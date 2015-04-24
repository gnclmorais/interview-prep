/**
 * Implementation number 2: using an array of arrays [[key, value]].
 */
function Dictionary () {
  // Entries will be saved as lists as well: [key, value]
  this._table = [];

  /**
   * Private search method.
   * @param  {String} key The key to search for.
   * @return {Number}     The index of the key found (or -1 if not found).
   */
  function _search (key) {
    _table.forEach(function (row, index) {
      if (row[0] === key) {
        return index;
      }
    });

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

    var index = _search(key);
    var row = [key, value];
    // If found, replace; if not found, attach to the end of it.
    if (index > -1) {
      _table[index] = row;
    } else {
      _table.push(row);
    }

    return
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

    var index = _search(key);
    return index > -1 ? _table[index] : undefined;
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

    var index = _search(key);
    if (index > -1) {
      _table.splice(index, 1);
    }

    return
  }

  /**
   * Public methods
   */
  return {
    'add_key_value_pair': add,
    'get_value': get,
    'remove_key': remove
  };
}

/**
 * Implementation number 1: using a JavaScript object as dictionary.
 */
module.exports = (function dictionaryObject () {
  this._table = {};

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

    _table[key] = value;

    return this;
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

    return _table[key];
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

    delete _table[key];

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

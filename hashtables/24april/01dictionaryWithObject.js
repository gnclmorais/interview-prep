/**
 * Implementation number 1: using a JavaScript object as dictionary.
 */
function Dictionary () {
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

    return
  }


  /**
   * ________                               ___
   * `MMMMMMMb.                             `MM
   *  MM    `Mb                              MM
   *  MM     MM   ____   ___  __     ____    MM  __
   *  MM    .M9  6MMMMb  `MM 6MMb   6MMMMb.  MM 6MMb
   *  MMMMMMM(  6M'  `Mb  MMM9 `Mb 6M'   Mb  MMM9 `Mb
   *  MM    `Mb MM    MM  MM'   MM MM    `'  MM'   MM
   *  MM     MM MMMMMMMM  MM    MM MM        MM    MM
   *  MM     MM MM        MM    MM MM        MM    MM
   *  MM    .M9 YM    d9  MM    MM YM.   d9  MM    MM
   * _MMMMMMM9'  YMMMM9  _MM_  _MM_ YMMMM9  _MM_  _MM_
   */

  /**
   * Fills the dictionary with several elements and times the search.
   * @param  {Number} nrElems Defaults to 10.000 if no number is provided.
   * @chainable
   */
  function timeSearch (nrElems) {
    nrElems = nrElems || 10000;

    // Add dummy elements until getting to nrElems
    for (var i = 0; i < nrElems; i += 1) {
      add('test' + i, i);
    }

    var t0 = performance.now();
    get('non-existing-string');
    var t1 = performance.now();
    console.log(
      'Search for ' + nrElems + ' took ' + (t1 - t0) + ' milliseconds.'
    );

    return this;
  }

  /**
   * Public methods
   */
  return {
    'add_key_value_pair': add,
    'get_value': get,
    'remove_key': remove,
    // Testing:
    'time_search': timeSearch
  };
}

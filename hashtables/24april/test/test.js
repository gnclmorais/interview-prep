var sparkline = require('sparkline');
var hashObject = require('../01_1_dictionaryWithObject');
var hashArrays = require('../01_2_dictionaryWithArrayArrays');
var hashSorted = require('../01_3_dictionaryWithSortedList');

// describe('10,000 lookups', function () {
//   var lookups = 10000;

//   // Populate first with 10,000 elements
//   before(function (done) {
//     for (var i = 0; i < lookups; i += 1) {
//       hashObject.add_key_value_pair('test' + i, i);
//       hashArrays.add_key_value_pair('test' + i, i);
//       hashSorted.add_key_value_pair('test' + i, i);
//     }
//     done();
//   });

//   describe('Timing lockups', function () {
//     it('should use Object implementation', function () {
//       var start = process.hrtime();

//       // Worst case scenario: not found
//       var i = lookups;
//       while (i--) {
//         hashObject.get_value('non-existing-string');
//       }

//       // Time (in milliseconds, so nano -> milli)
//       console.log(process.hrtime(start)[1] / 1000000 + 'ms');
//     });

//     it('should use Arrays implementation', function () {
//       var start = process.hrtime();

//       // Worst case scenario: not found
//       var i = lookups;
//       while (i--) {
//         hashArrays.get_value('non-existing-string');
//       }

//       // Time (in milliseconds, so nano -> milli)
//       console.log(process.hrtime(start)[1] / 1000000 + 'ms');
//     });

//     it('should use Sorted List implementation', function () {
//       var start = process.hrtime();

//       // Worst case scenario: not found
//       var i = lookups;
//       while (i--) {
//         hashSorted.get_value('non-existing-string');
//       }

//       // Time (in milliseconds, so nano -> milli)
//       console.log(process.hrtime(start)[1] / 1000000 + 'ms');
//     });
//   });
// });

describe('1000 lookups on a few sets', function () {
  // Number of searchs
  var lookups = 1000;
  // Number of elements
  var keySets = [200, 100, 50, 10];
  var setSize = keySets.length - 1;
  // Times (for visualization purposes)
  var times = [];

  describe('10 elements', function () {
    before(function (done) {
      // Reset times
      times = [];

      // Fill up the arrays
      var max = keySets[setSize];
      for (var i = 0; i < max; i += 1) {
        hashObject.add_key_value_pair('test' + i, i);
        hashArrays.add_key_value_pair('test' + i, i);
        hashSorted.add_key_value_pair('test' + i, i);
      }

      done();
    });

    after(function (done) {
      console.log(sparkline(times) + '\n');

      done();
    });

    it('should use Object implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 10;
      while (i--) {
        hashObject.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Arrays implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 10;
      while (i--) {
        hashArrays.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Sorted List implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 10;
      while (i--) {
        hashSorted.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });
  });

  describe('50 elements', function () {
    before(function (done) {
      // Reset times
      times = [];

      // Fill up the arrays
      var max = keySets[setSize];
      for (var i = 0; i < max; i += 1) {
        hashObject.add_key_value_pair('test' + i, i);
        hashArrays.add_key_value_pair('test' + i, i);
        hashSorted.add_key_value_pair('test' + i, i);
      }

      done();
    });

    after(function (done) {
      console.log(sparkline(times) + '\n');

      done();
    });

    it('should use Object implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 50;
      while (i--) {
        hashObject.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Arrays implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 50;
      while (i--) {
        hashArrays.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Sorted List implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 50;
      while (i--) {
        hashSorted.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });
  });

  describe('100 elements', function () {
    before(function (done) {
      // Reset times
      times = [];

      // Fill up the arrays
      var max = keySets[setSize];
      for (var i = 0; i < max; i += 1) {
        hashObject.add_key_value_pair('test' + i, i);
        hashArrays.add_key_value_pair('test' + i, i);
        hashSorted.add_key_value_pair('test' + i, i);
      }

      done();
    });

    after(function (done) {
      console.log(sparkline(times) + '\n');

      done();
    });

    it('should use Object implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 100;
      while (i--) {
        hashObject.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Arrays implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 100;
      while (i--) {
        hashArrays.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Sorted List implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 100;
      while (i--) {
        hashSorted.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });
  });

  describe('200 elements', function () {
    before(function (done) {
      // Reset times
      times = [];

      // Fill up the arrays
      var max = keySets[setSize];
      for (var i = 0; i < max; i += 1) {
        hashObject.add_key_value_pair('test' + i, i);
        hashArrays.add_key_value_pair('test' + i, i);
        hashSorted.add_key_value_pair('test' + i, i);
      }

      done();
    });

    after(function (done) {
      console.log(sparkline(times) + '\n');

      done();
    });

    it('should use Object implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 200;
      while (i--) {
        hashObject.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Arrays implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 200;
      while (i--) {
        hashArrays.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });

    it('should use Sorted List implementation', function () {
      var start = process.hrtime();

      // Worst case scenario: not found
      var i = 200;
      while (i--) {
        hashSorted.get_value('non-existing-string');
      }

      // Time (in milliseconds, so nano -> milli)
      var nano = process.hrtime(start)[1];
      times.push(nano);
      console.log(nano / 1000000 + 'ms');
    });
  });
});

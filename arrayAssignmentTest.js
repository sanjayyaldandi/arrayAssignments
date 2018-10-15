let assert = require("assert");
let filterOddNumbers = require("./arrayAssignment").filterOddNumbers;

assert.deepEqual(filterOddNumbers([2,3,5,7]),[3,5,7]);

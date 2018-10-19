let assert = require("assert");
let filterOddNumbers = require("./oddNumbers.js").filterOddNumbers;

assert.deepEqual(filterOddNumbers([2,3,5,7]),[3,5,7]);

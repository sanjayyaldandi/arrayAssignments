let assert = require("assert");
let lib = require("./arrayAssignment");

//------------------------------------------------

let filterOddNumbers = lib.filterOddNumbers;

// no element
assert.deepEqual(filterOddNumbers([]),[]);

// one element
assert.deepEqual(filterOddNumbers([1]),[1]);
assert.deepEqual(filterOddNumbers([2]),[]);

// two elements
assert.deepEqual(filterOddNumbers([1,1]),[1,1]);
assert.deepEqual(filterOddNumbers([2,2]),[]);
assert.deepEqual(filterOddNumbers([1,2]),[1]);
assert.deepEqual(filterOddNumbers([2,1]),[1]);
assert.deepEqual(filterOddNumbers([1,2,3]),[1,3]);
assert.deepEqual(filterOddNumbers([3,2,1]),[3,1]);

// one negative element
assert.deepEqual(filterOddNumbers([-1]),[-1]);
assert.deepEqual(filterOddNumbers([-2]),[]);

// two or more negative elements

assert.deepEqual(filterOddNumbers([-1,-1]),[-1,-1]);
assert.deepEqual(filterOddNumbers([-2,-2]),[]);
assert.deepEqual(filterOddNumbers([-1,-2]),[-1]);
assert.deepEqual(filterOddNumbers([-2,-1]),[-1]);
assert.deepEqual(filterOddNumbers([-1,-1]),[-1,-1]);
assert.deepEqual(filterOddNumbers([-2,-2]),[]);
assert.deepEqual(filterOddNumbers([-1,-2,-3]),[-1,-3]);
assert.deepEqual(filterOddNumbers([-3,-2,-1]),[-3,-1]);
assert.deepEqual(filterOddNumbers([-1,-2,-3,-4]),[-1,-3]);
assert.deepEqual(filterOddNumbers([-4,-3,-2,-1]),[-3,-1]);

//------------------------------------------------

let filterEvenNumbers = lib.filterEvenNumbers;

// no element
assert.deepEqual(filterEvenNumbers([]),[]);

// one element
assert.deepEqual(filterEvenNumbers([1]),[]);
assert.deepEqual(filterEvenNumbers([2]),[2]);

// two or more elements
assert.deepEqual(filterEvenNumbers([1,1]),[]);
assert.deepEqual(filterEvenNumbers([2,2]),[2,2]);
assert.deepEqual(filterEvenNumbers([1,2]),[2]);
assert.deepEqual(filterEvenNumbers([2,1]),[2]);

// one negative element
assert.deepEqual(filterEvenNumbers([-1]),[]);
assert.deepEqual(filterEvenNumbers([-2]),[-2]);

//two or more negative elemnts
assert.deepEqual(filterEvenNumbers([-1,-1]),[]);
assert.deepEqual(filterEvenNumbers([-2,-2]),[-2,-2]);
assert.deepEqual(filterEvenNumbers([-1,-2]),[-2]);
assert.deepEqual(filterEvenNumbers([-2,-1]),[-2]);
assert.deepEqual(filterEvenNumbers([-1,-2,-3]),[-2]);
assert.deepEqual(filterEvenNumbers([-3,-2,-1]),[-2]);
assert.deepEqual(filterEvenNumbers([-1,-2,-3,-4]),[-2,-4]);
assert.deepEqual(filterEvenNumbers([-4,-3,-2,-1]),[-4,-2]);

//------------------------------------------------

let sum = lib.sum;

// no element
assert.deepEqual(sum([]),0);

// one element
assert.deepEqual(sum([1]),1);
assert.deepEqual(sum([2]),2);

// two or more elements
assert.deepEqual(sum([1,1]),2);
assert.deepEqual(sum([2,2]),4);
assert.deepEqual(sum([1,2]),3);
assert.deepEqual(sum([2,1]),3);
assert.deepEqual(sum([1,2,3]),6);
assert.deepEqual(sum([3,2,1]),6);

// one negative element
assert.deepEqual(sum([-1]),-1);
assert.deepEqual(sum([-2]),-2);

// two or more negative elements
assert.deepEqual(sum([-1,-1]),-2);
assert.deepEqual(sum([-2,-2]),-4);
assert.deepEqual(sum([-1,-2]),-3);
assert.deepEqual(sum([-2,-1]),-3);
assert.deepEqual(sum([-1,-2,-3]),-6);
assert.deepEqual(sum([-3,-2,-1]),-6);

//------------------------------------------------

let reverseNumbers = lib.reverseNumbers;

// no element
assert.deepEqual(reverseNumbers([]),[]);

// one element
assert.deepEqual(reverseNumbers([1]),[1]);
assert.deepEqual(reverseNumbers([2]),[2]);

// two or more elements
assert.deepEqual(reverseNumbers([1,2]),[2,1]);
assert.deepEqual(reverseNumbers([2,1]),[1,2]);
assert.deepEqual(reverseNumbers([1,2,3]),[3,2,1]);
assert.deepEqual(reverseNumbers([3,2,1]),[1,2,3]);
assert.deepEqual(reverseNumbers([4,3,2,1]),[1,2,3,4]);
assert.deepEqual(reverseNumbers([1,2,3,4]),[4,3,2,1]);

//------------------------------------------------

let filterEverySecondNum = lib.filterEverySecondNum;

assert.deepEqual(filterEverySecondNum([]),"");
assert.deepEqual(filterEverySecondNum([1]),"1");
assert.deepEqual(filterEverySecondNum([1,2]),"1");
assert.deepEqual(filterEverySecondNum([1,2,3]),"1,3");
assert.deepEqual(filterEverySecondNum([1,2,3,4]),"1,3");
assert.deepEqual(filterEverySecondNum([2,4,6]),"2,6");
assert.deepEqual(filterEverySecondNum([2,4]),"2");
assert.deepEqual(filterEverySecondNum([2]),"2");
//------------------------------------------------

let createReverseFibo = lib.createReverseFibo;

assert.deepEqual(createReverseFibo(5),[3,2,1,1,0])
assert.deepEqual(createReverseFibo(8),[13,8,5,3,2,1,1,0])
assert.deepEqual(createReverseFibo(2),[1,0])
assert.deepEqual(createReverseFibo(6),[5,3,2,1,1,0])

//------------------------------------------------

let findGreatestNum = lib.findGreatestNum;

// no element
assert.deepEqual(findGreatestNum([]),undefined)

// one element
assert.deepEqual(findGreatestNum([1]),1)

//two or more elements
assert.deepEqual(findGreatestNum([1,6]),6)
assert.deepEqual(findGreatestNum([1,3,26]),26)
assert.deepEqual(findGreatestNum([1,26,3,5]),26)

//------------------------------------------------

let findLowestNum = lib.findLowestNum;

// no element
assert.deepEqual(findLowestNum([]),undefined)

// one element
assert.deepEqual(findLowestNum([1]),1)

// two or more elements
assert.deepEqual(findLowestNum([3,2]),2)
assert.deepEqual(findLowestNum([5,3,4]),3)

// negative elements
assert.deepEqual(findLowestNum([-1,-2]),-2)
assert.deepEqual(findLowestNum([-3,-1,-2]),-3)
//------------------------------------------------

let calculateAverage = lib.calculateAverage;
// no elements
assert.deepEqual(calculateAverage([]),null);

// one element
assert.deepEqual(calculateAverage([0]),0);
assert.deepEqual(calculateAverage([1]),1);

// two or more elements
assert.deepEqual(calculateAverage([1,2]),1.5);
assert.deepEqual(calculateAverage([1,2,3,4,5,6]),3.5);
assert.deepEqual(calculateAverage([5,4,6,2,3,12,54,23]),13.625);

// elements with decimal values
assert.deepEqual(calculateAverage([1.5,6.2,7.3]),5);
assert.deepEqual(calculateAverage([1.1,2.2,3.3,9.1,4.9]),4.12);

// negative values
assert.deepEqual(calculateAverage([-1,-2,-3]),-2);

//------------------------------------------------

let mapLengthOfWords = lib.mapLengthOfWords;

// no element
assert.deepEqual(mapLengthOfWords([]),[])

// one element
assert.deepEqual(mapLengthOfWords(["a"]),[1]);

//two more or elements
assert.deepEqual(mapLengthOfWords(["a","ab"]),[1,2]);
assert.deepEqual(mapLengthOfWords(["a","ab","123"]),[1,2,3]);
assert.deepEqual(mapLengthOfWords(["a","ab","123","ab12"]),[1,2,3,4]);

//------------------------------------------------

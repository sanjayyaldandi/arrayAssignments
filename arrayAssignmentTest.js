let assert = require("assert");
let lib = require("./arrayAssignment");

//----------------------------------------------------------

let filterOddNumbers = lib.filterOddNumbers;

let inputOdd = [[],[1],[2],[1,1],[2,2],[2,1],[1,2],[-1],[-2],[-1,-1],[-2,-2],[-2,-1],[-1,-2]];
let expectedOddOutput = [[],[1],[],[1,1],[],[1],[1],[-1],[],[-1,-1],[],[-1],[-1]];

for(let index in inputOdd){
  assert.deepEqual(filterOddNumbers(inputOdd[index]),expectedOddOutput[index]);
}

//----------------------------------------------------------

let filterEvenNumbers = lib.filterEvenNumbers;

let inputEven = [[],[1],[2],[1,1],[2,2],[2,1],[1,2],[-1],[-2],[-1,-1],[-2,-2],[-2,-1],[-1,-2]];
let expectedEvenOutput = [[],[],[2],[],[2,2],[2],[2],[],[-2],[],[-2,-2],[-2],[-2]];

for(let index in inputEven){
  assert.deepEqual(filterEvenNumbers(inputEven[index]),expectedEvenOutput[index]);
}

//----------------------------------------------------------

let sumOfElements = lib.sumOfElements;

let inputSum =          [[1],[2],[1,1],[2,2],[2,1],[1,2],[-1],[-2],[-1,-1],[-2,-2],[-2,-1],[-1,-2]];
let expectedSumOutput = [1,2,2,4,3,3,-1,-2,-2,-4,-3,-3];

for(let index in inputSum){
  assert.deepEqual(sumOfElements(inputSum[index]),expectedSumOutput[index]);
}

//----------------------------------------------------------

let printReverse = lib.printReverse;

let inputPrintReverse =     [[],[1],[1,2],[2,1],[1,2,3],[3,2,1]];
let expectedReverseOutput = [[],[1],[2,1],[1,2],[3,2,1],[1,2,3]];

for(let index in inputPrintReverse){
  assert.deepEqual(printReverse(inputPrintReverse[index]),expectedReverseOutput[index]);
}

//----------------------------------------------------------

let filterAlternatingElements = lib.filterAlternatingElements;

assert.deepEqual(filterAlternatingElements([1,2,3,4]),"1,3");
assert.deepEqual(filterAlternatingElements([7,5,3,5,4,3]),"7,3,4");

//----------------------------------------------------------

let reverseFibo = lib.reverseFibo;

assert.deepEqual(reverseFibo(5),[3,2,1,1,0])
assert.deepEqual(reverseFibo(8),[13,8,5,3,2,1,1,0])

//----------------------------------------------------------

let greatestNum = lib.greatestNum;

assert.deepEqual(greatestNum([1,6,2,5,3,4]),"6")
assert.deepEqual(greatestNum([1,26,3,5]),"26")

//----------------------------------------------------------

let lowestNum = lib.lowestNum;

assert.deepEqual(lowestNum([1,2,3,4]),"1")
assert.deepEqual(lowestNum([3,4,2,5,1]),"1")

//----------------------------------------------------------

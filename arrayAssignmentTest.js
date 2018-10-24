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

let sumOfElements = lib.sumOfElements;

// one element
assert.deepEqual(sumOfElements([1]),1);
assert.deepEqual(sumOfElements([2]),2);

// two or more elements
assert.deepEqual(sumOfElements([1,1]),2);
assert.deepEqual(sumOfElements([2,2]),4);
assert.deepEqual(sumOfElements([1,2]),3);
assert.deepEqual(sumOfElements([2,1]),3);
assert.deepEqual(sumOfElements([1,2,3]),6);
assert.deepEqual(sumOfElements([3,2,1]),6);

// one negative element
assert.deepEqual(sumOfElements([-1]),-1);
assert.deepEqual(sumOfElements([-2]),-2);

// two or more negative elements
assert.deepEqual(sumOfElements([-1,-1]),-2);
assert.deepEqual(sumOfElements([-2,-2]),-4);
assert.deepEqual(sumOfElements([-1,-2]),-3);
assert.deepEqual(sumOfElements([-2,-1]),-3);
assert.deepEqual(sumOfElements([-1,-2,-3]),-6);
assert.deepEqual(sumOfElements([-3,-2,-1]),-6);

//------------------------------------------------

let reverseNumbers = lib.reverseNumbers;

// no element
assert.deepEqual(reverseNumbers([]),"");

// one element
assert.deepEqual(reverseNumbers([1]),"1");
assert.deepEqual(reverseNumbers([2]),"2");

// two or more elements
assert.deepEqual(reverseNumbers([1,2]),"2,1");
assert.deepEqual(reverseNumbers([2,1]),"1,2");
assert.deepEqual(reverseNumbers([1,2,3]),"3,2,1");
assert.deepEqual(reverseNumbers([3,2,1]),"1,2,3");
assert.deepEqual(reverseNumbers([4,3,2,1]),"1,2,3,4");
assert.deepEqual(reverseNumbers([1,2,3,4]),"4,3,2,1");

//------------------------------------------------

let filterEverySecondNum = lib.filterEverySecondNum;

// one element
assert.deepEqual(filterEverySecondNum([1]),[1]);
assert.deepEqual(filterEverySecondNum([27]),[27]);

// two or more elements
assert.deepEqual(filterEverySecondNum([1,2]),[1]);
assert.deepEqual(filterEverySecondNum([2,4]),[2]);
assert.deepEqual(filterEverySecondNum([1,2,3]),[1,3]);
assert.deepEqual(filterEverySecondNum([2,4,6]),[2,6]);
assert.deepEqual(filterEverySecondNum([1,2,3,4]),[1,3]);
//------------------------------------------------

let createReverseFibo = lib.createReverseFibo;

assert.deepEqual(createReverseFibo(1),[0]);
assert.deepEqual(createReverseFibo(2),[1,0]);
assert.deepEqual(createReverseFibo(5),[3,2,1,1,0]);
assert.deepEqual(createReverseFibo(6),[5,3,2,1,1,0]);
assert.deepEqual(createReverseFibo(8),[13,8,5,3,2,1,1,0]);
//------------------------------------------------

let findGreatestNum = lib.findGreatestNum;

// one element
assert.deepEqual(findGreatestNum([1]),1);

//two or more elements
assert.deepEqual(findGreatestNum([1,6]),6);
assert.deepEqual(findGreatestNum([1,3,26]),26);
assert.deepEqual(findGreatestNum([1,26,3,5]),26);

//------------------------------------------------

let findLowestNum = lib.findLowestNum;

// one element
assert.deepEqual(findLowestNum([1]),1);

// two or more elements
assert.deepEqual(findLowestNum([3,2]),2);
assert.deepEqual(findLowestNum([5,3,4]),3);

// negative elements
assert.deepEqual(findLowestNum([-1,-2]),-2);
assert.deepEqual(findLowestNum([-3,-1,-2]),-3);
//------------------------------------------------

let calculateAverage = lib.calculateAverage;

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

// negative elements
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

let countOddNumbers = lib.countOddNumbers;

// no element
assert.deepEqual(countOddNumbers([]),0);

// one element
assert.deepEqual(countOddNumbers([1]),1);
assert.deepEqual(countOddNumbers([2]),0);

// two or more elements
assert.deepEqual(countOddNumbers([1,2]),1);
assert.deepEqual(countOddNumbers([2,1]),1);
assert.deepEqual(countOddNumbers([1,2,3]),2);
assert.deepEqual(countOddNumbers([3,2,1]),2);
assert.deepEqual(countOddNumbers([1,2,3,4]),2);
assert.deepEqual(countOddNumbers([4,3,2,1]),2);

// one negative
assert.deepEqual(countOddNumbers([-1]),1);
assert.deepEqual(countOddNumbers([-2]),0);

// two or more negative elements
assert.deepEqual(countOddNumbers([-1,-2]),1);
assert.deepEqual(countOddNumbers([-2,-1]),1);
assert.deepEqual(countOddNumbers([-1,-2,-3]),2);
assert.deepEqual(countOddNumbers([-3,-2,-1]),2);
assert.deepEqual(countOddNumbers([-1,-2,-3,-4]),2);
assert.deepEqual(countOddNumbers([-4,-3,-2,-1]),2);

//------------------------------------------------

let countEvenNumbers = lib.countEvenNumbers;

// no element
assert.deepEqual(countEvenNumbers([]),0);

// one element
assert.deepEqual(countEvenNumbers([1]),0);
assert.deepEqual(countEvenNumbers([2]),1);

// two or more elements
assert.deepEqual(countEvenNumbers([1,2]),1);
assert.deepEqual(countEvenNumbers([2,1]),1);
assert.deepEqual(countEvenNumbers([1,2,3]),1);
assert.deepEqual(countEvenNumbers([3,2,1]),1);
assert.deepEqual(countEvenNumbers([1,2,3,4]),2);
assert.deepEqual(countEvenNumbers([4,3,2,1]),2);

// one negative element
assert.deepEqual(countEvenNumbers([-1]),0);
assert.deepEqual(countEvenNumbers([-2]),1);

// two or more negative elements
assert.deepEqual(countEvenNumbers([-1,-2]),1);
assert.deepEqual(countEvenNumbers([-2,-1]),1);
assert.deepEqual(countEvenNumbers([-1,-2,-3]),1);
assert.deepEqual(countEvenNumbers([-3,-2,-1]),1);
assert.deepEqual(countEvenNumbers([-1,-2,-3,-4]),2);
assert.deepEqual(countEvenNumbers([-4,-3,-2,-1]),2);

//------------------------------------------------

let countAboveThreshold = lib.countAboveThreshold;

// one element 
assert.deepEqual(countAboveThreshold([1],0),1);
assert.deepEqual(countAboveThreshold([2],1),1);

//two or more elements
assert.deepEqual(countAboveThreshold([1,2],0),2);
assert.deepEqual(countAboveThreshold([1,2],1),1);
assert.deepEqual(countAboveThreshold([1,2,3],0),3);
assert.deepEqual(countAboveThreshold([1,2,3],1),2);
assert.deepEqual(countAboveThreshold([1,2,3,4],0),4);
assert.deepEqual(countAboveThreshold([1,2,3,4],1),3);

// one negative element
assert.deepEqual(countAboveThreshold([-1],-2),1);
assert.deepEqual(countAboveThreshold([0],-1),1);

//two or more negative elements
assert.deepEqual(countAboveThreshold([-1,-2],-3),2);
assert.deepEqual(countAboveThreshold([-2,-2],-3),2);
assert.deepEqual(countAboveThreshold([-1,-2,3],-3),3);
assert.deepEqual(countAboveThreshold([-1,2,0],-2),3);

//------------------------------------------------

let countBelowThreshold = lib.countBelowThreshold;

// one element
assert.deepEqual(countBelowThreshold([1],0),0);
assert.deepEqual(countBelowThreshold([1],2),1);
assert.deepEqual(countBelowThreshold([1],1),0);

// two or more elements
assert.deepEqual(countBelowThreshold([1,2],3),2);
assert.deepEqual(countBelowThreshold([1,2],2),1);
assert.deepEqual(countBelowThreshold([1,2,3],4),3);
assert.deepEqual(countBelowThreshold([1,2,3],1),0);
assert.deepEqual(countBelowThreshold([1,2,3,4],3),2);
assert.deepEqual(countBelowThreshold([1,2,3,4],2),1);

// one negative element
assert.deepEqual(countBelowThreshold([-1],0),1);

// two or more elements
assert.deepEqual(countBelowThreshold([-1,-2],0),2);
assert.deepEqual(countBelowThreshold([-1,-2,-3],-1),2);

//------------------------------------------------

let findIndexOfNumber = lib.findIndexOfNumber;

// one element
assert.deepEqual(findIndexOfNumber([1],1),0);

// two or more elements
assert.deepEqual(findIndexOfNumber([1,2],2),1);
assert.deepEqual(findIndexOfNumber([3,1],3),0);
assert.deepEqual(findIndexOfNumber([4,2,3],3),2);
assert.deepEqual(findIndexOfNumber([2,3,1],3),1);

//------------------------------------------------

reverseArray = lib.reverseArray;

// no element
assert.deepEqual(reverseArray([]),[]);

// one element
assert.deepEqual(reverseArray([1]),[1]);
assert.deepEqual(reverseArray([2]),[2]);

// two or more elements
assert.deepEqual(reverseArray([1,2]),[2,1]);
assert.deepEqual(reverseArray([2,1]),[1,2]);
assert.deepEqual(reverseArray([3,2,1]),[1,2,3]);
assert.deepEqual(reverseArray([1,2,3]),[3,2,1]);

//------------------------------------------------

isAscending = lib.isAscending;

// no element
assert.deepEqual(isAscending([]),true);

// one element
assert.deepEqual(isAscending([1]),true);
assert.deepEqual(isAscending([2]),true);

// two or more elements
assert.deepEqual(isAscending([1,2]),true);
assert.deepEqual(isAscending([2,1]),false);
assert.deepEqual(isAscending([3,2,1]),false);
assert.deepEqual(isAscending([1,2,3]),true);

//------------------------------------------------

isDescending = lib.isDescending;
// no element
assert.deepEqual(isDescending([]),true);

// one element
assert.deepEqual(isDescending([1]),true);
assert.deepEqual(isDescending([2]),true);

// two or more elements
assert.deepEqual(isDescending([1,2]),false);
assert.deepEqual(isDescending([2,1]),true);
assert.deepEqual(isDescending([3,2,1]),true);
assert.deepEqual(isDescending([1,2,3]),false);

//------------------------------------------------

extractDigits = lib.extractDigits;

// one element
assert.deepEqual(extractDigits(1),[1]);

// two or more elements
assert.deepEqual(extractDigits(12),[1,2]);
assert.deepEqual(extractDigits(23),[2,3]);
assert.deepEqual(extractDigits(246),[2,4,6]);
assert.deepEqual(extractDigits(135),[1,3,5]);
assert.deepEqual(extractDigits(3764),[3,7,6,4]);

//------------------------------------------------

removeDuplicate = lib.removeDuplicate;

// one element
assert.deepEqual(removeDuplicate([1]),[1]);
assert.deepEqual(removeDuplicate([2]),[2]);

// two or more elements
assert.deepEqual(removeDuplicate([1,2]),[1,2]);
assert.deepEqual(removeDuplicate([2,2]),[2]);
assert.deepEqual(removeDuplicate([1,2,3]),[1,2,3]);
assert.deepEqual(removeDuplicate([1,2,1]),[1,2]);
assert.deepEqual(removeDuplicate([1,1,1]),[1]);
assert.deepEqual(removeDuplicate([1,1,2]),[1,2]);
assert.deepEqual(removeDuplicate([4,3,4,1]),[4,3,1]);
assert.deepEqual(removeDuplicate([1,3,3,3]),[1,3]);

//------------------------------------------------

createUnionOfArrays = lib.createUnionOfArrays;

// one element
assert.deepEqual(createUnionOfArrays([1],[1]),[1]);
assert.deepEqual(createUnionOfArrays([1],[2]),[1,2]);
assert.deepEqual(createUnionOfArrays([21],[17]),[21,17]);

// two or more elements
assert.deepEqual(createUnionOfArrays([1,2],[2,3]),[1,2,3]);
assert.deepEqual(createUnionOfArrays([1,2,3],[2,3,4]),[1,2,3,4]);
assert.deepEqual(createUnionOfArrays([1,2,2],[3]),[1,2,3]);
assert.deepEqual(createUnionOfArrays([1,2,2],[3,3,4]),[1,2,3,4]);
assert.deepEqual(createUnionOfArrays([1,2,2],[3,3,4]),[1,2,3,4]);

////------------------------------------------------

createIntersectOfArrays = lib.createIntersectOfArrays;

// one element
assert.deepEqual(createIntersectOfArrays([4],[4]),[4]);
assert.deepEqual(createIntersectOfArrays([234],[234]),[234]);

// two or more elements
assert.deepEqual(createIntersectOfArrays([1,2],[3,2]),[2]);
assert.deepEqual(createIntersectOfArrays([-4,3],[5,-4]),[-4]);
assert.deepEqual(createIntersectOfArrays([1,2,3],[2,3,4]),[2,3]);
assert.deepEqual(createIntersectOfArrays([1,-76,-23],[-23,-76,4]),[-76,-23]);

//------------------------------------------------

findDifference = lib.findDifference;

// one element
assert.deepEqual(findDifference([1],[3]),[1]);

// two or more elements
assert.deepEqual(findDifference([1,2],[1,2]),[]);
assert.deepEqual(findDifference([1,2],[1,3]),[2]);
assert.deepEqual(findDifference([1,2],[2,3]),[1]);
assert.deepEqual(findDifference([1,2,3],[1,2,3]),[]);
assert.deepEqual(findDifference([1,2,3],[3,1,2]),[]);
assert.deepEqual(findDifference([4,2,3],[1,3,2]),[4]);
assert.deepEqual(findDifference([8,7,4,6],[2,3,6,7]),[8,4]);
assert.deepEqual(findDifference([1,2,3,4,5],[1,3,5,7]),[2,4]);
assert.deepEqual(findDifference([5,7,3,6,4],[1,3,5,7]),[6,4]);

//------------------------------------------------

isSubset = lib.isSubset;

// one element
assert.deepEqual(isSubset([1],[1]),true);
assert.deepEqual(isSubset([2],[1]),false);

// two or more elememts
assert.deepEqual(isSubset([1,2],[1]),true);
assert.deepEqual(isSubset([1,2],[3]),false);
assert.deepEqual(isSubset([1,2],[1,2]),true);
assert.deepEqual(isSubset([1,2],[2,1]),true);
assert.deepEqual(isSubset([1,2],[2,3]),false);
assert.deepEqual(isSubset([1,2,3],[1]),true);
assert.deepEqual(isSubset([1,2,3],[4]),false);
assert.deepEqual(isSubset([1,2,3],[1,2]),true);
assert.deepEqual(isSubset([1,2,3],[1,2,4]),false);
assert.deepEqual(isSubset([1,2,3],[1,2,3]),true);

//------------------------------------------------

generateZip = lib.generateZip;

// one element
assert.deepEqual(generateZip([1],[1]),[[1,1]]);
assert.deepEqual(generateZip([1],[2]),[[1,2]]);

// two or more elements
assert.deepEqual(generateZip([1,2],[3,4]),[[1,3],[2,4]]);
assert.deepEqual(generateZip([1,3],[2,4]),[[1,2],[3,4]]);
assert.deepEqual(generateZip([1,3],[2]),[[1,2]]);
assert.deepEqual(generateZip([1,2,3],[2,4,6]),[[1,2],[2,4],[3,6]]);
assert.deepEqual(generateZip([1,2,3],[2,4]),[[1,2],[2,4]]);
assert.deepEqual(generateZip([1,2,3,4],[2,4]),[[1,2],[2,4]]);
assert.deepEqual(generateZip([1,2,3,4],[2,4,6]),[[1,2],[2,4],[3,6]]);

//------------------------------------------------

rotateArray = lib.rotateArray;

// one element
assert.deepEqual(rotateArray([1],1),[1]);

// two or more elments
assert.deepEqual(rotateArray([1,2],1),[2,1]);
assert.deepEqual(rotateArray([1,2],2),[1,2]);
assert.deepEqual(rotateArray([1,2,3],2),[3,1,2]);
assert.deepEqual(rotateArray([1,2,3],1),[2,3,1]);
assert.deepEqual(rotateArray([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotateArray([1,2,3,4,5],4),[5,1,2,3,4]);

//------------------------------------------------

createPartition = lib.createPartition;

assert.deepEqual(createPartition([1,2,7,4,9,10,5],5),[[1,2,4,5],[7,9,10]]);
assert.deepEqual(createPartition([1,2,3,4,5],3),[[1,2,3],[4,5]]);
assert.deepEqual(createPartition([4,9,7,2,8,1],3),[[2,1],[4,9,7,8]]);

//------------------------------------------------

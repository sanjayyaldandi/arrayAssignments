const isEven = function(number){
  return (number % 2 == 0);
}

//--------------------------------------------------

const isOdd = function(number){
  return (number % 2 != 0);
}

//(1)-----------------------------------------------

const filterOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}
exports.filterOddNumbers = filterOddNumbers;

//(2)-----------------------------------------------

const filterEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}
exports.filterEvenNumbers = filterEvenNumbers;

//(3)-----------------------------------------------

const sum = function(num1,num2){
  return num1+num2;
}

const sumOfElements = function(numbers){
  return numbers.reduce(sum);
}
exports.sumOfElements = sumOfElements;

//(4)-----------------------------------------------

const reverseNumbers = function(numbers){
  return numbers.reverse().join();
}
exports.reverseNumbers = reverseNumbers;

//(5)-----------------------------------------------

const filterAlternateNum = function(state,element){
  let { elements,index } = state;
  if(index % 2 == 0){
    elements.push(element);
  }
  return { elements : elements , index : index+1 };
}

const filterEverySecondNum = function(numbers){
  return numbers.reduce(filterAlternateNum,{ index : 0, elements : [] }).elements;
}
exports.filterEverySecondNum = filterEverySecondNum;

//(6)-----------------------------------------------

const createReverseFibo = function(givenNumber){
  let reversedFiboSeries = [];
  let num1 = -1;
  let num2 = 1;
  let sum = 0;
  for(let number=0;number<givenNumber;number++){
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    reversedFiboSeries.unshift(sum);
  }
  return reversedFiboSeries;
}
exports.createReverseFibo = createReverseFibo;

//(7)-----------------------------------------------

const findGreater = function(num1,num2){
  return Math.max(num1,num2);
}

const findGreatestNum = function(numbers){
  return numbers.reduce(findGreater);
}
exports.findGreatestNum = findGreatestNum;

//(8)-----------------------------------------------

const findLower = function(num1,num2){
  return Math.min(num1,num2);
}
const findLowestNum = function(numbers){
  return numbers.reduce(findLower);
}
exports.findLowestNum = findLowestNum;

//(9)-----------------------------------------------

const calculateAverage = function(numbers){
  let answer = numbers.reduce(sum);
  return answer/numbers.length;
}
exports.calculateAverage = calculateAverage;

//(10)----------------------------------------------

const findLength = function(word){
  return word.length;
}

const mapLengthOfWords = function(words){
  return words.map(findLength);
}
exports.mapLengthOfWords = mapLengthOfWords;

//(11)----------------------------------------------

const countOddNumbers = function(numbers){
  return filterOddNumbers(numbers).length;
}
exports.countOddNumbers = countOddNumbers;

//(12)----------------------------------------------

const countEvenNumbers = function(numbers){
  return filterEvenNumbers(numbers).length;
}
exports.countEvenNumbers = countEvenNumbers;

//(13)----------------------------------------------

const findAboveThreshold = function(limit){
  let isGreater = function(number){
    return number > limit;
  }
  return isGreater;
}

const countAboveThreshold = function(numbers,limit){
  let threshold = findAboveThreshold(limit);
  return numbers.filter(threshold).length;
}
exports.countAboveThreshold = countAboveThreshold;

//(14)----------------------------------------------

const findBelowThreshold = function(limit){
  let isLower = function(number){
    return number < limit;
  }
  return isLower;
}

const countBelowThreshold = function(numbers,limit){
  let threshold = findBelowThreshold(limit);
  return numbers.filter(threshold).length;
}
exports.countBelowThreshold = countBelowThreshold;

//(15)----------------------------------------------

const findIndexOfNumber = function(numbers,numberToMatch){
  const checkIndex = function(number){
    return number == numberToMatch;
  }
  return indexOfNumber = numbers.findIndex(checkIndex);
}
exports.findIndexOfNumber = findIndexOfNumber;

//(16)----------------------------------------------

const reverseArray = function(numbers){
  return numbers.reverse();
}
exports.reverseArray = reverseArray;

//(17)----------------------------------------------

const isGreater = function(state, currentElement){
  let {resultArray, previousNumber} = state;
  state.resultArray.push(previousNumber <= currentElement);
  state.previousNumber = currentElement;
  return state;
}

const isTrue = function(result){
  return result == true;
}

const isAscending = function (numbers){
  let results = numbers.reduce(isGreater, {resultArray : [], previousNumber : numbers[0]}).resultArray;
  return results.every(isTrue);
}

exports.isAscending = isAscending;

//(18)----------------------------------------------

const isLower = function(state, currentElement){
  let {resultArray, previousNumber}=state;
  state.resultArray.push(previousNumber >= currentElement);
  state.previousNumber = currentElement;
  return state;
}

const isDescending = function (numbers){
  let results = numbers.reduce(isLower, {resultArray : [], previousNumber : numbers[0]}).resultArray;
  return results.every(isTrue);
}

exports.isDescending = isDescending;

//(19)----------------------------------------------

const changeTypeOfElement = function(number){
  return +number;
}

const extractDigits = function(number){
  let result = number.toString().split("");
  return result.map(changeTypeOfElement);
}
exports.extractDigits = extractDigits;

//(20)----------------------------------------------

const removeDuplicate = function(numbers){
  let uniqueElements = [];
  uniqueElements.push(numbers[0]);
  for(let number of numbers){
    if(!uniqueElements.includes(number)){
      uniqueElements.push(number);
    }
  }
  return uniqueElements;
}
exports.removeDuplicate = removeDuplicate;

//(21)----------------------------------------------

const createUnionOfArrays = function(numbers1,numbers2){
  combineArrays = numbers1.concat(numbers2)
  return removeDuplicate(combineArrays);
}
exports.createUnionOfArrays = createUnionOfArrays;

//(22)----------------------------------------------

const createIntersectOfArrays = function(numbers1,numbers2){
  const isInclude = function(element){
    return numbers2.includes(element);
  }
  let outputArray =  numbers1.filter(isInclude);
  return outputArray = removeDuplicate(outputArray);
}
exports.createIntersectOfArrays = createIntersectOfArrays;

//(23)----------------------------------------------

const findDifference = function(numbers1,numbers2){
  let uniqueElement = [];
  for(let number of numbers1){
    if(!numbers2.includes(number) && !uniqueElement.includes(number)){
      uniqueElement.push(number);
    }
  }
  return uniqueElement;
}
exports.findDifference = findDifference;

//(24)----------------------------------------------

const checkSubset = function(mainSet) {
  return function(element) {
    return mainSet.includes(element);
  }
}

const isSubset = function(mainSet, subset) {
  let checkList = checkSubset(mainSet);
  return subset.every(checkList);
}
exports.isSubset = isSubset;

//(25)----------------------------------------------

const generateZip = function(numbers1,numbers2){
  let zippedOutput = [];
  length = Math.min(numbers1.length,numbers2.length)

  for(let number=0;number<length;number++){
    zippedOutput.push([numbers1[number],numbers2[number]]);
  }
  return zippedOutput;
}
exports.generateZip = generateZip;

//(26)----------------------------------------------

const rotateArray=function(numbers,givenNumber){
  return numbers.slice(givenNumber,numbers.length).concat(numbers.slice(0,givenNumber));
} 
exports.rotateArray = rotateArray;

//(27)----------------------------------------------

const filterElements = function(numbers, partitionNumber){
   return function(array, element){
    if(element <= partitionNumber){
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }
}

const createPartition = function(numbers, partitionNumber) {
  let filteredElements = filterElements(numbers, partitionNumber);
  return numbers.reduce(filteredElements, [[],[]]);
}

exports.createPartition = createPartition;

//--------------------------------------------------

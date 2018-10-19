const isOdd = function(number){
  return (number % 2 != 0);
}

const filterOddNumbers = function(numbers){
  let oddNumbers = [];
  for(let number of numbers){
    if( isOdd(number) ){
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

//------------------------------------------------

const isEven = function(number){
  return (number % 2 == 0);
}

const filterEvenNumbers = function(numbers){
  let evenNumbers = [];
  for(let number of numbers){
    if( isEven(number) ){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

//------------------------------------------------

const sum = function(numbers){
  let answer = 0;
  for(let number of numbers){
    answer += number;
  }
  return answer;
}

//------------------------------------------------

const reverseNumbers = function(numbers){
  let reversedResult = [];
  for(let number of numbers){
    reversedResult.unshift(number);
  }
  return reversedResult;
}

//------------------------------------------------

const filterEverySecondNum = function(numbers){
  let filteredNums = "";
  let delimiter = "";
  for(let number=0;number<numbers.length;number+=2){
    filteredNums += delimiter + numbers[number];
    delimiter = ",";
  }
  return filteredNums;
}

//------------------------------------------------

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

//------------------------------------------------

const findGreatestNum = function(numbers){

  let greatestNumber = numbers[0];

  for(let number of numbers){
    if(greatestNumber < number){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}

//------------------------------------------------

const findLowestNum = function(numbers){

  let lowestNumber = numbers[0];

  for(let number of numbers) {
    if(lowestNumber > number){
      lowestNumber = number;
    }
  }
  return lowestNumber;
}

//------------------------------------------------

const calculateAverage = function(numbers){

  let totalSum = 0;
  let averageOfNum = null;

  if(numbers.length > 0) {
    for(let number of numbers){
      totalSum += number;
    }
    averageOfNum = totalSum/numbers.length;
  }
  return averageOfNum;
}

//------------------------------------------------

const mapLengthOfWords = function(words){

  let lengthOfWords = [];

  for(let word of words){
    lengthOfWords.push(word.length);
  }
  return lengthOfWords;
}

//------------------------------------------------

const isNumOdd = function(number){
  return (number % 2 != 0);
}

const countOddNumbers = function(numbers){
  let count = 0;
  for(let number of numbers){
    if( isNumOdd(number) ){
      count++;
    }
  }
  return count;
}

//------------------------------------------------

const countAboveThreshold = function(numbers,givenNumber){
  let count = 0;
  for(let number of numbers){
    if(number > givenNumber){
      count++;
    }
  }
  return count;
}

//------------------------------------------------

const countBelowThreshold = function(numbers,givenNumber){
  let count = 0;
  for(let number of numbers){
    if(number < givenNumber){
      count++;
    }
  }
  return count;
}

//------------------------------------------------

const findIndexOfNumber = function(numbers,givenNumber){
  let indexNumber = 0;
  for(let number=numbers.length-1;number>=0;number--){
    if(numbers[number] == givenNumber){
      indexNumber = number;
    }
  }
  return indexNumber;
}

//------------------------------------------------

const reverseArray = function(numbers){
  let reversedResult = [];

  for(let number=numbers.length-1;number>=0;number--){
    reversedResult.push(numbers[number]);
  }
  return reversedResult;
}

//------------------------------------------------

const isAscending = function(numbers){
  let checkAscending = true;
  for(let number=0;number<numbers.length;number++){
    if(numbers[number] > numbers[number+1]){
      checkAscending = false;
    }
  }
  return checkAscending;
}

//------------------------------------------------

const isDescending = function(numbers){
  let checkDescending = true;
  for(let number=0;number<numbers.length;number++){
    if(numbers[number] < numbers[number+1]){
      checkDescending = false;
    }
  }
  return checkDescending;
}

//------------------------------------------------

const extractDigits = function(number){
  let strinfOfNum = ""+number;
  let extractedDigits = [];

  for(let digit=0;digit<strinfOfNum.length;digit++){
    extractedDigits.push(+strinfOfNum[digit]);
  }
  return extractedDigits;
}

//------------------------------------------------

const removeDuplicate = function(numbers){
  let uniqueElements = [];
  uniqueElements[0] = numbers[0];

  for(let number=1;number<numbers.length;number++){
    if(!uniqueElements.includes(numbers[number])){
      uniqueElements.push(numbers[number]);
    }
  }
  return uniqueElements;
}

//------------------------------------------------

exports.filterOddNumbers = filterOddNumbers;
exports.filterEvenNumbers = filterEvenNumbers;
exports.sum = sum;
exports.reverseNumbers = reverseNumbers;
exports.filterEverySecondNum = filterEverySecondNum;
exports.createReverseFibo = createReverseFibo;
exports.findGreatestNum = findGreatestNum;
exports.findLowestNum = findLowestNum;
exports.calculateAverage = calculateAverage;
exports.mapLengthOfWords = mapLengthOfWords;
exports.countOddNumbers = countOddNumbers;
exports.countAboveThreshold = countAboveThreshold;
exports.countBelowThreshold = countBelowThreshold;
exports.findIndexOfNumber = findIndexOfNumber;
exports.reverseArray = reverseArray;
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.extractDigits = extractDigits;
exports.removeDuplicate = removeDuplicate;

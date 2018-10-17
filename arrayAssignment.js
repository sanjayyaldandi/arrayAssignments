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

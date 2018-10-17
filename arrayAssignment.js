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

//-------------------------------------------------------

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

//-------------------------------------------------------

const sumOfElements = function(numbers){
  let addition = 0;
  for(let number of numbers){
    addition += number;
  }
  return addition;
}

//-------------------------------------------------------

const printReverse = function(numbers){
  let reversedArray = [];
  for(let number of numbers){
    reversedArray.unshift(number);
  }
  return reversedArray;
}

//-------------------------------------------------------

const filterAlternatingElements = function(numbers){
  let filteredNums = "";
  let delimiter = "";
  for(let number=0;number<numbers.length;number+=2){
    filteredNums += delimiter + numbers[number];
    delimiter = ",";
  }
  return filteredNums;
}

//-------------------------------------------------------

const reverseFibo = function(givenNumber){
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

//-------------------------------------------------------

const greatestNum = function(numbers){

  let greatestNumber = numbers[0];

  for(let number=0;number<numbers.length;number++){
    if(greatestNumber < numbers[number]){
      greatestNumber = numbers[number];
    }
  }
  return greatestNumber;
}

//-------------------------------------------------------

const lowestNum = function(numbers){
  let lowestNumber = numbers[0];

  for(let number=0;number<numbers.length;number++){
    if(lowestNumber > numbers[number]){
      lowestNumber = numbers[number];
    }
  }
  return lowestNumber;
}

//-------------------------------------------------------

exports.filterOddNumbers = filterOddNumbers;
exports.filterEvenNumbers = filterEvenNumbers;
exports.sumOfElements = sumOfElements;
exports.printReverse = printReverse;
exports.filterAlternatingElements = filterAlternatingElements;
exports.reverseFibo = reverseFibo;
exports.greatestNum = greatestNum;
exports.lowestNum = lowestNum;

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

//--------------------------------------------------------

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

//--------------------------------------------------------

const sumOfElements = function(numbers){
  let sum = [];
  let addition = 0;
  for(let number of numbers){
    addition += number;
  }
  sum.push(addition);
  return sum;
}

//--------------------------------------------------------

const printReverse = function(numbers){
  let reversedArray = [];
  for(let number of numbers){
    reversedArray.unshift(number);
  }
  return reversedArray;
}

//--------------------------------------------------------

const filterAlternatingElements = function(numbers){
  let filteredNums = [];
  for(let number=0;number<numbers.length;number+=2){
    filteredNums.push(numbers[number]);
  }
  return filteredNums;
}

//--------------------------------------------------------

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

//--------------------------------------------------------

exports.filterOddNumbers = filterOddNumbers;
exports.filterEvenNumbers = filterEvenNumbers;
exports.sumOfElements = sumOfElements;
exports.printReverse = printReverse;
exports.filterAlternatingElements = filterAlternatingElements;
exports.reverseFibo = reverseFibo;

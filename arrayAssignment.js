const isEven = function(number){
  return (number % 2 == 0);
}

//(1)---------------------------------------------

const filterOddNumbers = function(numbers){
  let oddNumbers = [];
  for(let number of numbers){
    if( !isEven(number) ){
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}
exports.filterOddNumbers = filterOddNumbers;

//(2)------------------------------------------------

const filterEvenNumbers = function(numbers){
  let evenNumbers = [];
  for(let number of numbers){
    if( isEven(number) ){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}
exports.filterEvenNumbers = filterEvenNumbers;

//(3)------------------------------------------------

const sum = function(numbers){
  let answer = 0;
  for(let number of numbers){
    answer += number;
  }
  return answer;
}
exports.sum = sum;

//(4)----------------------------------------------

const reverseNumbers = function(numbers){
  let reversedResult = "";
  let delimiter = "";
  for(let number=numbers.length-1;number>=0;number--){
    reversedResult += delimiter + numbers[number];
    delimiter = ",";
  }
  return reversedResult;
}
exports.reverseNumbers = reverseNumbers;

//(5)----------------------------------------------

const filterEverySecondNum = function(numbers){
  let filteredNums = "";
  let delimiter = "";
  for(let number=0;number<numbers.length;number+=2){
    filteredNums += delimiter + numbers[number];
    delimiter = ",";
  }
  return filteredNums;
}
exports.filterEverySecondNum = filterEverySecondNum;

//(6)----------------------------------------------

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

//(7)----------------------------------------------

const findGreatestNum = function(numbers){
  let greatestNumber = numbers[0];
  for(let number of numbers){
    if(greatestNumber < number){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}
exports.findGreatestNum = findGreatestNum;

//(8)----------------------------------------------

const findLowestNum = function(numbers){
  let lowestNumber = numbers[0];
  for(let number of numbers) {
    if(lowestNumber > number){
      lowestNumber = number;
    }
  }
  return lowestNumber;
}
exports.findLowestNum = findLowestNum;

//(9)----------------------------------------------

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
exports.calculateAverage = calculateAverage;

//(10)----------------------------------------------

const mapLengthOfWords = function(words){
  let lengthOfWords = [];
  for(let word of words){
    lengthOfWords.push(word.length);
  }
  return lengthOfWords;
}
exports.mapLengthOfWords = mapLengthOfWords;

//(11)----------------------------------------------

const countOddNumbers = function(numbers){
  let count = 0;
  for(let number of numbers){
    if( !isEven(number) ){
      count++;
    }
  }
  return count;
}
exports.countOddNumbers = countOddNumbers;

//(12)----------------------------------------------

const countEvenNumbers = function(numbers){
  let count = 0;
  for(let number of numbers){
    if( isEven(number) ){
      count++;
    }
  }
  return count;
}
exports.countEvenNumbers = countEvenNumbers;

//(13)----------------------------------------------

const countAboveThreshold = function(numbers,givenNumber){
  let count = 0;
  for(let number of numbers){
    if(number > givenNumber){
      count++;
    }
  }
  return count;
}
exports.countAboveThreshold = countAboveThreshold;

//(14)----------------------------------------------

const countBelowThreshold = function(numbers,givenNumber){
  let count = 0;
  for(let number of numbers){
    if(number < givenNumber){
      count++;
    }
  }
  return count;
}
exports.countBelowThreshold = countBelowThreshold;

//(15)----------------------------------------------

const findIndexOfNumber = function(numbers,givenNumber){
  for(let number=0;number<numbers.length-1;number++){
    if(numbers[number] == givenNumber){
      return number;
    }
  }
}
exports.findIndexOfNumber = findIndexOfNumber;

//(16)----------------------------------------------

const reverseArray = function(numbers){
  let reversedResult = [];
  for(let number=numbers.length-1;number>=0;number--){
    reversedResult.push(numbers[number]);
  }
  return reversedResult;
}
exports.reverseArray = reverseArray;

//(17)----------------------------------------------

const isAscending = function(numbers){
  for(let number=0;number<numbers.length;number++){
    if(numbers[number] > numbers[number+1]){
      return false;
    }
  }
  return true;
}
exports.isAscending = isAscending;

//(18)----------------------------------------------

const isDescending = function(numbers){
  for(let number=0;number<numbers.length;number++){
    if(numbers[number] < numbers[number+1]){
      return false;
    }
  }
  return true;
}
exports.isDescending = isDescending;

//(19)----------------------------------------------

const extractDigits = function(number){
  let strinfOfNum = ""+number;
  let extractedDigits = [];
  for(let digit of strinfOfNum){
    extractedDigits.push(+digit);
  }
  return extractedDigits;
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
  let unionArray = [];
  unionArray.push(numbers1[0]);
  for(let number=0;number<numbers1.length;number++){
    if(!unionArray.includes(numbers1[number]) && !unionArray.includes(numbers2[number])){
      unionArray.push(number);
    }
  }
  return unionArray;
}
exports.createUnionOfArrays = createUnionOfArrays;

//(22)----------------------------------------------

const createIntersectOfArrays = function(numbers1,numbers2){
  let intersectedArray = [];
  for(let number of numbers1){
    if(numbers1.includes(number) && numbers2.includes(number)){
      intersectedArray.push(number)
    }
  }
  return intersectedArray;
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

const isSubset = function(mainSet,subSet){
  for(let number of subSet){
    if(!mainSet.includes(number)){
      return false;
    }
  }
  return true;
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
  let rotatedResult=[];
  for (let number=givenNumber;number<numbers.length;number++){
    rotatedResult.push(numbers[number])
  }
  for (let number=0;number<givenNumber;number++){
    rotatedResult.push(numbers[number])
  }
  return rotatedResult;
} 
exports.rotateArray = rotateArray;

//(27)----------------------------------------------

const createPartition = function(numbers,givenNumber){
  let outputArray = [];
  let lessThanNum = [];
  let greaterThanNum = [];
  for(let number of numbers){
    if(givenNumber >= number){
      lessThanNum.push(number);
    } else {
      greaterThanNum.push(number);
    }
  }
  outputArray.push(lessThanNum,greaterThanNum);
  return outputArray;
}
exports.createPartition = createPartition;

//----------------------------------------------

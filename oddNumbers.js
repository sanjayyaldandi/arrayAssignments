const isOdd = function(number){
  return +number % 2 != 0;
}

const filterOddNumbers = function(numbers){
  let oddNumbers = [];
  for(let number of numbers){
    if( isOdd(number) ){
      oddNumbers.push(+number);
    }
  }
  return oddNumbers;
}

exports.filterOddNumbers = filterOddNumbers;

function isBigger(a, b) {
  return a>b
};

function isSmaller(a, b) {
  return !isBigger(a, b)
};

function getMin(...numbers) {
  return Math.min(numbers)
}

function makeNumber(string) {
  return parseInt(string.replace(/\D+/g,""));
};

function countNumbers(string) {
  let numbers = {};
  for (let i = 0; i < string.length; i++) {
    let val = string[i];
    if (!isNaN(parseInt(val))) {
      val in numbers ? numbers[val]++ : numbers[val] = 1;
    }
  }
  return numbers;
};

function pipe(number, ...functions) {
  functions.forEach(element => {
    number=element(number)
  });
  return number;
}

function isLeapYear(date) {
  var year= new Date(date).getFullYear()
  if(isNaN(year)){
    return 'Invalid Date'
  }
  if(year%100==0){
    if(year%400==0){
      return TrueRes()
    }
    else{
      return FalseRes() 
    }
  }
  if(year%4==0){
    return TrueRes();
  }
  else{
    return FalseRes();
  }
  function TrueRes(){
    return year+' is a leap year'
  }
  function FalseRes(){
    return year+' is not a leap year'
  }
};


module.exports = {
  isBigger,
  isSmaller,
  makeNumber,
  countNumbers,
  getMin,
  pipe,
  isLeapYear,
};

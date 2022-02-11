const validateTitle = (value) => {
  if(typeof(value)=='string'){
    if(value.length>2&&value.length<20&&value[0]==value[0].toUpperCase()&&isNaN(parseInt(value[0]))){
      return 'VALID'
    }    
    else{
      return 'INVALID'
    }
  }
  else{
    return 'Incorrect input data'
  }
}

const sum = (value1, value2) => {
  var number = value2;
  var strNumber=value1;
  if(typeof(value1)=='number'){
    number=value1;
    strNumber=value2;
  }
  strNumber=parseInt(strNumber)
  if(number%3==0||number%5==0){
    number=-1*number
  }
  return number+strNumber;
};

module.exports = {
  validateTitle,
  sum,
};

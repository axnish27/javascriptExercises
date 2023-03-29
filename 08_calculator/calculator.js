const add = function(num1,num2) {
  return num1+num2
	
};

const subtract = function(num1,num2) {
  return num1-num2
	
};

const sum = function(arr) {
  let total = 0;
  for (let i in arr) {
  total += arr[i];
}
  return total
	
};

const multiply = function(arr) 
{
  let total = 1;
  for (let i in arr) {
  total *= arr[i];
}
  return total
};

const power = function(base,index) {
  return Math.pow(base,index)
	
};

const factorial = function(num) {
  let factorial = 1;
  for(let i = 1; i <= num; i++){
    factorial = factorial * i;
  }
	
  return factorial;
};

console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

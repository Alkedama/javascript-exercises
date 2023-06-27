const add = function(num1, num2) {
	let result = num1 + num2;

  return result;
};

console.log(add(2, 6));

const subtract = function(num1, num2) {
  let result = num1 - num2;
	
  return result;
};

console.log(subtract(10, 4));

const sum = function(array) {
 let result = 0;
  
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
};

console.log(sum([1,3,5,7,9]));

const multiply = function(array) {
let result = 1;

for (let i = 0; i < array.length; i++) {
  result *= array[i];
}

return result;

};

console.log(multiply([2,4,6,8,10,12,14]));

const power = function(base, exponent) {
	let result = Math.pow(base, exponent);

  return result;
};

console.log(power(4,3));

const factorial = function(num) {

  let result = 1;

  for(let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
	
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

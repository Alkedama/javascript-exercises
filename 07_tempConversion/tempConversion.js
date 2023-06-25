const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * 5 / 9;

  return Math.ceil(result * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * 9 / 5) + 32;

  return Math.ceil(result * 10) / 10;  
};

console.log(convertToFahrenheit(12));
console.log(convertToCelsius(48));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
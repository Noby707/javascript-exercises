const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, el) => acc + el, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, el) => acc * el, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if (num < 2) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

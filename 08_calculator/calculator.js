const add = function(a,b) {
    const c = a + b
	return c
};

const subtract = function(a,b) {
	const c = a - b
    return c
};

const sum = function(sumArray) {
	const sumResult = sumArray.reduce((total, arrayValues) => {
        return total + arrayValues;
    }, 0);
    return sumResult
};

const multiply = function(a,b) {
    return a * b
};

const power = function() {
	
};

const factorial = function() {
	
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

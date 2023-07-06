const add = function(n1, n2) {
  let addition = n1 + n2;
	return addition;
};

const subtract = function(n1, n2) {
	let subtraction = n1 - n2;
  return subtraction;
};

const sum = function(inputArray) {
	let sum = 0;
    for (let i = 0; i < inputArray.length; i++) sum += +inputArray[i]; // unary plus same as parseInt(inputArray[i]) or Number(inputArray[i])
  return sum;
};

const multiply = function(...args) {
  let multiplication = 1;
  for (let i = 0; i < args.length; i++) multiplication *= +args[i]; // unary plus same as parseInt(args[i]) or number(args[i])
  return multiplication;
};

const power = function(base, power) {
  let powResult = Math.pow(base, power);
  return powResult;
};

const factorial = function(num) {
  //recursive
	if (num == 0 || num == 1) return 1;
  else return num * factorial(num-1);

  //iterative
  // let result = 1;
  // for (let i = 2; i < num; i++) { result *= i; }
  // return result;
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

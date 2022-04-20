const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length > 0) {
    return array.reduce((total, num) => total + num);
  } else {
    return 0
  }
};

const multiply = function (array) {
  if (array.length > 0) {
    return array.reduce((total, num) => total * num);
  } else {
    return 0
  }
};

const power = function (a, b) {
  let total;
  for (var i = 0; i < b - 1; i++) {
    if (i === 0) {
      total = a * a;
    } else {
      total *= a;
    }
  }
  return total;
};

const factorial = function (num) {
  let total;
  if (num < 1) {
    total = 1;
  } else {
    for (var i = num; i > 0; i--) {
      if (i === num) {
        total = num;
      } else {
        total *= i;
      }
    }
  }
  return total;
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

const factorialOfNumber = require("../factorial/index.js");

const ratioOfTwoNumbers = require("../ratio/index.js");

const ratioAndFactorial = (x, y, z) => {
  const ratio = ratioOfTwoNumbers(x, y);
  const factorial = factorialOfNumber(z);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;

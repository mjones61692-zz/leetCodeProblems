/*

Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

*/

const divideTwoIntegers = (dividend, divisor) => {
  // declare negative and set to one
  let neg = false;
  // if dividend or divisor is negative, but not both
  if ((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) {
    // set negative equal to negative one
    neg = true;
  }
  // take absolute value of both dividend and divisor
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  // declare variable total and set to zero
  let total = 0;
  // declare variable multiplier and set to zero
  let multiplier = -1;
  // while total is less than or equal to dividend
  while (total <= dividend) {
    // add divisor to total
    total += divisor;
    // add 1 to multiplier
    multiplier++;
  }
  // return multiplier
  return neg ? -multiplier : multiplier;
};

/*

console.log(divideTwoIntegers(10, 3)); // 3
console.log(divideTwoIntegers(7, -3)); // -2

*/

/*

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

*/

const twoSum = (arr, target) => {
  let store = {};
  for (let x = 0; x < arr.length; x++) {
    if (store[target - arr[x]]) {
      return true;
    }
    store[arr[x]] = true;
  }
  return false;
};

console.log(twoSum([10, 15, 3, 7], 17)); // true
console.log(twoSum([10, 15, 3], 17)); // false

/*

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

*/

// // two pass

// function sortColors(arr) {
//   let store = {};
//   for (let x = 0; x < arr.length; x++) {
//     store[arr[x]] ? store[arr[x]]++ : store[arr[x]] = 1;
//   }
//   let i = 0;
//   for (let num = 0; num < 3; num++) {
//     while (store[num] !== 0) {
//       arr[i] = num;
//       store[num]--;
//       i++;
//     }
//   }
//   return arr;
// }

// one pass

function sortColors(arr) {
  let zero = 0;
  let one = 0;
  for (let two = 0; two < arr.length; two++) {
    let num = arr[two];
    arr[two] = 2;
    if (num < 2) {
      arr[one] = 1;
      one++;
    }
    if (num < 1) {
      arr[zero] = 0;
      zero++;
    }
  }
  return arr;
}

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0, 0, 1, 1, 2, 2]

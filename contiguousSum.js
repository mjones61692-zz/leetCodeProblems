/*

Given a list of integers and a number K, return which contiguous elements of the list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4], since 2 + 3 + 4 = 9.

*/

function contiguousSum(arr, K) {
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  while (true) {
    if (sum === K) {
      return arr.slice(p1, p2);
    }
    if (sum < K) {
      if (p2 === arr.length) {
        return null;
      }
      sum += arr[p2++];
    } else {
      sum -= arr[p1++];
    }
  }
}

console.log(contiguousSum([2, 4, 2, 3], 9)); // [2, 3, 4]
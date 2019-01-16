/*

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, 
since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

*/

const nonAdjacentNumbers = function(array) {
  let maxLast = null;
  let maxPrev = null;
  array.forEach((num, i) => {
    if (i === 0) {
      maxLast = num;
    } else if (i === 1) {
      maxPrev = maxLast;
      maxLast = num;
    } else {
      let temp = Math.max(num + maxPrev, num);
      maxPrev = Math.max(maxLast, maxPrev);
      maxLast = temp;
    }
  });
  return Math.max(maxLast, maxPrev);
};

console.log(nonAdjacentNumbers([5, 1, 1, 5])); // 13

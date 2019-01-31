/*

In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, 
then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only 
carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?

Example 1:

Input: [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].
Example 2:

Input: [0,1,2,2]
Output: 3
Explanation: We can collect [1,2,2].
If we started at the first tree, we would only collect [0, 1].
Example 3:

Input: [1,2,3,2,2]
Output: 4
Explanation: We can collect [2,3,2,2].
If we started at the first tree, we would only collect [1, 2].
Example 4:

Input: [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can collect [1,2,1,1,2].
If we started at the first tree or the eighth tree, we would only collect 4 fruits.

*/

const fruitIntoBaskets = function(arr) {
  let count = 0;
  let maxCount = 0;
  let i = 0;
  let lastFruit = null;
  let currFruit = null;
  let restart = 0;
  while (i < arr.length) {
    if (currFruit === null) {
      currFruit = arr[i++];
      count++;
    } else if (arr[i] !== currFruit && lastFruit === null) {
      lastFruit = currFruit;
      currFruit = arr[i];
      restart = i++;
      count++;
    } else if (arr[i] !== currFruit) {
      if (arr[i] !== lastFruit) {
        count = 1;
        lastFruit = null;
        i = restart;
        currFruit = arr[i++];
      } else {
        lastFruit = currFruit;
        currFruit = arr[i];
        restart = i++;
        count++;
      }
    } else {
      i++;
      count++;
    }
    if (count > maxCount) maxCount = count;
  }
  return maxCount;
};

console.log(fruitIntoBaskets([1,2,1])) // 3
console.log(fruitIntoBaskets([0,1,2,2])) // 3
console.log(fruitIntoBaskets([1,2,3,2,2])) // 4
console.log(fruitIntoBaskets([3,3,3,1,2,1,1,2,3,3,4])) // 5

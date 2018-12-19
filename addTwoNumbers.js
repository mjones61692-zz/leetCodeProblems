/*

You are given two non-empty linked lists representing two non-negative integers. The digits are 
stored in reverse order and each of their nodes contain a single digit. Add the two numbers and 
return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Ex: 

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807

*/

function addTwoNumbers(list1, list2) {
  // declare carry and set equal to 0
  let carry = 0;
  // declare totalList
  let totalList;
  // declare totalNode
  let totalNode;
  // while list1 and list2 do not equal null
  while (list1 !== null || list2 !== null) {
    // declare l1 and set to null
    let l1 = null;
    // declare l2 and set to null
    let l2 = null;
    // if list1 does not equal null
    if (list1 !== null) {
      // set l1 to list1.value
      l1 = list1.value;
      // set list1 to list1.next
      list1 = list1.next;
    }
    // if list2 does not equal null
    if (list2 !== null) {
      // set l2 to list2.value
      l2 = list2.value;
      // set list2 to list2.next
      list2 = list2.next;
    }
    // declare sum and set equal to l1 value plus l1 value plus carry
    let sum = l1 + l2 + carry;
    // if sum is greater than 9
    if (sum > 9) {
      // set carry to floor of sum divided by 10
      carry = Math.floor(sum / 10);
      // set sum to sum modulo 10
      sum = sum % 10;
    }
    // else
    else {
      // set carry to 0
      carry = 0;
    }
    // if totalList undefined
    if (totalList === undefined) {
      // set totalList to new node with value sum
      totalList = new node(sum);
      // set totalNode to totalList
      totalNode = totalList;
    }
    // else
    else {
      // set totalNode.next to new node with value sum
      totalNode.next = new node(sum);
      // set totalNode to totalNode.next
      totalNode = totalNode.next;
    }
  }
  // if carry does not equal 0
  if (carry !== 0) {
    // set totalNode.next to new node with value carry
    totalNode.next = new node(carry);
  }
  // return totalList
  return totalList;
};

function node(value) {
  this.value = value;
  this.next = null;
}

let list1 = new node(1);
let list2 = new node(5);

console.log(addTwoNumbers(list1, list2));

/*

Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.

Note:
  - Your algorithm should use only constant extra space.
  - You may not modify the values in the list's nodes, only nodes itself may be changed.

*/

const swapNodesInPairs = (head) => {
  const swap = (node) => {
    if (node === null || node.next === null) {
      return node;
    } else {
      let first = node.next;
      let second = node;
      let rest = node.next.next;
      first.next = second;
      second.next = swap(rest);
      return first;
    }
  };
  return swap(head);
};

const node = function(val) {
  this.val = val;
  this.next = null;
};

let list = new node(1);
list.next = new node(2);
list.next.next = new node(3);
list.next.next.next = new node(4);
console.log(swapNodesInPairs(list));

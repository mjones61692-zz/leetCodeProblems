const reverse = function(list) {
  let node = list;
  let prev = null;
  while (node !== null) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}

const Node = function(val) {
  this.val = val;
  this.next = null;
}

let list = new Node(5);
list.next = new Node(10);
list.next.next = new Node(111);

console.log(list);
console.log(reverse(list));

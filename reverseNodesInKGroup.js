function reverseLL(head, prev, k) {
  let i = 0;
  let future = head;
  let curr = head;
  while (i < k) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    i++
  }
  return [prev, future];
}

function reverseKGroup(head, k) {
  let i = 0;
  let start = head;
  while (i < k) {
    head = head.next;
    if (head === null) {
      return start;
    }
    i++;
  }
  let pointers = reverseLL(start, head, k);
  pointers[1].next = reverseKGroup(pointers[1].next, k);
  return pointers[0];
}

function node(val) {
  this.val = val;
  this.next = null;
}

let input = new node(1);
input.next = new node(2);
input.next.next = new node(3);
input.next.next.next = new node(4);
input.next.next.next.next = new node(5);
input.next.next.next.next.next = new node(6);
input.next.next.next.next.next.next = new node(7);
input.next.next.next.next.next.next.next = new node(8);
input.next.next.next.next.next.next.next.next = new node(9);

console.log(JSON.stringify(reverseKGroup(input, 4)));

// // recursive

// function invertTree(node) {
//   if (node === null) {
//     return null;
//   } else {
//     let left = invertTree(node.right);
//     let right = invertTree(node.left);
//     node.left = left;
//     node.right = right;
//     return node;
//   }
// }

// iterative

function invertTree(node) {
  if (node === null) {
    return node;
  } else {
    let queue = [];
    queue.push(node);
    while (queue.length > 0) {
      let root = queue.shift();
      let left = root.left;
      let right = root.right;
      root.right = left;
      root.left = right;
      if (root.right !== null) queue.push(root.right);
      if (root.left !== null) queue.push(root.left);
    }
  }
  return node;
}

function Tree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let tree = new Tree(4);
tree.left = new Tree(2);
tree.left.left = new Tree(1);
tree.left.right = new Tree(3);
tree.right = new Tree(7);
tree.right.left = new Tree(6);
tree.right.right = new Tree(9);

console.log(tree);

console.log(invertTree(tree));

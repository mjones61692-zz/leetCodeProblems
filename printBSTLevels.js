function printBSTLevels(tree) {
  let result = [];
  let queue = [];
  queue.push(tree);
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return result;
}

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(23424);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);
console.log(printBSTLevels(tree));
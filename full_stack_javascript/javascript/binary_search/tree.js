function Node(data, left = null, right = null) {
  return { data, left, right };
}

function Tree(array) {
  array = [...new Set(array)].sort((a, b) => a - b); // Sort and remove duplicates
  this.root = buildTree(array);
}

Tree.prototype.height = function (node) {
  if (node === null) return -1;
  return 1 + Math.max(this.height(node.left), this.height(node.right));
};

function buildTree(array) {
  if (array.length === 0) return null;

  const mid = Math.floor(array.length / 2);
  const root = Node(array[mid]);

  root.left = buildTree(array.slice(0, mid));
  root.right = buildTree(array.slice(mid + 1));

  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

Tree.prototype.insert = function (value) {
  this.root = insertRec(this.root, value);
};

function insertRec(node, value) {
  if (node === null) return Node(value);

  if (value < node.data) {
    node.left = insertRec(node.left, value);
  } else if (value > node.data) {
    node.right = insertRec(node.right, value);
  }

  return node;
}

Tree.prototype.deleteItem = function (value) {
  this.root = deleteRec(this.root, value);
};

function deleteRec(node, value) {
  if (node === null) return null;

  if (value < node.data) {
    node.left = deleteRec(node.left, value);
  } else if (value > node.data) {
    node.right = deleteRec(node.right, value);
  } else {
    if (node.left === null) return node.right;
    if (node.right === null) return node.left;

    node.data = minValue(node.right);
    node.right = deleteRec(node.right, node.data);
  }

  return node;
}

function minValue(node) {
  let minv = node.data;
  while (node.left !== null) {
    minv = node.left.data;
    node = node.left;
  }
  return minv;
}

Tree.prototype.find = function (value) {
  return findRec(this.root, value);
};

function findRec(node, value) {
  if (node === null || node.data === value) return node;

  if (value < node.data) {
    return findRec(node.left, value);
  } else {
    return findRec(node.right, value);
  }
}

Tree.prototype.levelOrder = function (callback) {
  if (!callback) throw new Error("Callback is required");

  const queue = [];
  if (this.root !== null) queue.push(this.root);

  while (queue.length > 0) {
    const node = queue.shift();
    callback(node);

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }
};

Tree.prototype.inOrder = function (callback) {
  if (!callback) throw new Error("Callback is required");
  inOrderRec(this.root, callback);
};

function inOrderRec(node, callback) {
  if (node === null) return;
  inOrderRec(node.left, callback);
  callback(node);
  inOrderRec(node.right, callback);
}

Tree.prototype.preOrder = function (callback) {
  if (!callback) throw new Error("Callback is required");
  preOrderRec(this.root, callback);
};

function preOrderRec(node, callback) {
  if (node === null) return;
  callback(node);
  preOrderRec(node.left, callback);
  preOrderRec(node.right, callback);
}

Tree.prototype.postOrder = function (callback) {
  if (!callback) throw new Error("Callback is required");
  postOrderRec(this.root, callback);
};

function postOrderRec(node, callback) {
  if (node === null) return;
  postOrderRec(node.left, callback);
  postOrderRec(node.right, callback);
  callback(node);
}

Tree.prototype.depth = function (node, current = this.root, depth = 0) {
  if (current === null) return -1;
  if (current === node) return depth;

  if (node.data < current.data) {
    return this.depth(node, current.left, depth + 1);
  } else {
    return this.depth(node, current.right, depth + 1);
  }
};

Tree.prototype.isBalanced = function () {
  return this.isBalancedRec(this.root);
};

Tree.prototype.isBalancedRec = function (node) {
  if (node === null) return true;

  const leftHeight = this.height(node.left);
  const rightHeight = this.height(node.right);

  if (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    this.isBalancedRec(node.left) &&
    this.isBalancedRec(node.right)
  ) {
    return true;
  }

  return false;
};

Tree.prototype.rebalance = function () {
  const nodes = [];
  this.inOrder((node) => nodes.push(node.data));
  this.root = buildTree(nodes);
};

function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// 13. Create a binary search tree from an array of random numbers < 100.
const tree = new Tree(generateRandomArray(15, 100));

// 14. Confirm that the tree is balanced by calling isBalanced.
console.log("Is balanced:", tree.isBalanced());

// 15. Print out all elements in level, pre, post, and in order.
console.log("Level order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre-order:");
tree.preOrder((node) => console.log(node.data));

console.log("In-order:");
tree.inOrder((node) => console.log(node.data));

console.log("Post-order:");
tree.postOrder((node) => console.log(node.data));

// 16. Unbalance the tree by adding several numbers > 100.
[150, 200, 250].forEach((value) => tree.insert(value));

// 17. Confirm that the tree is unbalanced by calling isBalanced.
console.log("Is balanced:", tree.isBalanced());

// 18. Balance the tree by calling rebalance.
tree.rebalance();

// 19. Confirm that the tree is balanced by calling isBalanced.
console.log("Is balanced:", tree.isBalanced());

// 20. Print out all elements in level, pre, post, and in order.
console.log("Level order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre-order:");
tree.preOrder((node) => console.log(node.data));

console.log("In-order:");
tree.inOrder((node) => console.log(node.data));

console.log("Post-order:");
tree.postOrder((node) => console.log(node.data));
prettyPrint(tree.root);

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a new value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      // if the tree is empty, make the new node the root
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        // if the value is already in the tree, return undefined
        return undefined;
      }

      if (value < current.value) {
        // if the value is less than the current node, move left
        if (!current.left) {
          // if there is no left child, make the new node the left child
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        // if the value is greater than the current node, move right
        if (!current.right) {
          // if there is no right child, make the new node the right child
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  // search for a value in the tree
  search(value) {
    if (!this.root) {
      // if the tree is empty, return false
      return false;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        // if the value is found, return true
        return true;
      }

      if (value < current.value) {
        // if the value is less than the current node, move left
        if (!current.left) {
          // if there is no left child, the value is not in the tree
          return false;
        }

        current = current.left;
      } else {
        // if the value is greater than the current node, move right
        if (!current.right) {
          // if there is no right child, the value is not in the tree
          return false;
        }

        current = current.right;
      }
    }
  }
}

// This code defines two classes: Node and BinarySearchTree.

// The Node class represents a node in the binary search tree, with a value property,
// and left and right properties that point to the node's left and right child nodes, respectively.

// The BinarySearchTree class represents the binary search tree itself.
// It has a root property that points to the root node of the tree.

// The insert method adds a new node with the given value to the tree.
// If the tree is empty, the new node becomes the root node. Otherwise, the method traverses
// the tree from the root node to a leaf node, searching for the correct place to insert the new
// node based on the value of the node being inserted.

// The search method searches the tree for a node with the given value.
// If the tree is empty, the method returns false. Otherwise, the method traverses the tree from the root node to a leaf node,
// searching for the node with the given value based on the value of the node being searched for.

const tree = new BinarySearchTree();

// create a tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// search for a value
console.log(tree.search(5)); // true
console.log(tree.search(10)); // true
console.log(tree.search(18)); // true
console.log(tree.search(8)); // false

// In this example, we create a new BinarySearchTree object called tree.
// We then insert several nodes into the tree using the insert method.

// Finally, we use the search method to search for several values in the tree, and log the results to the console.
// The first three searches should return true, since the values are in the tree, and the last search should return false,
// since the value is not in the tree.

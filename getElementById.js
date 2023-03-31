function getEleById(id) {
  // Check if id is a string
  if (typeof id !== 'string') {
    throw new TypeError('getElementById expects a string argument');
  }

  // Get the root element
  const root =
    document.documentElement || document.body.parentNode || document.body;

  // Traverse the DOM tree recursively and return the first element with matching id
  function traverse(node) {
    // If node is null or undefined, return null
    if (!node) {
      return null;
    }

    // If node's id matches the search id, return the node
    if (node.id === id) {
      return node;
    }

    // Loop through all child nodes of node and call traverse recursively on each
    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      const result = traverse(childNode);
      // If any of the child nodes has a matching id, return the result
      if (result) {
        return result;
      }
    }
    // If no matching id is found in the subtree rooted at node, return null
    return null;
  }

  // Call the traverse function starting from the root element
  return traverse(root);
}

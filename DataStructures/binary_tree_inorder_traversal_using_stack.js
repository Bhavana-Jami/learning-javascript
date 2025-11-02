class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insertNode(val) {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const stack = [this.root];
        while (stack.length > 0) {
            let currentNode = stack.pop();
            if (!currentNode.left) {
                currentNode.left = newNode;
                return;
            } else {
                stack.push(currentNode.left);
            }

            if (!currentNode.right) {
                currentNode.right = newNode;
                return;
            } else {
                stack.push(currentNode.right);
            }
        }
    }
    inorderTraversal() {
        const stack = [];
        const result = [];
        let currentNode = this.root;
        while (stack.length > 0 || currentNode !== null) {
            while (currentNode !== null) {
                stack.push(currentNode)
                currentNode = currentNode.left;
            }
            currentNode = stack.pop();
            result.push(currentNode.val);
            currentNode = currentNode.right;
        }
        return result;
    }
}
const x = new BinaryTree();
x.insertNode(2);
x.insertNode(3);
x.insertNode(4);
x.insertNode(5);

console.log("Tree:", x);
console.log("Inorder Traversal:", x.inorderTraversal());
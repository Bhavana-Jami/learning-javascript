// Step	-> Action
// Start with root	-> Push to stack
// While stack not empty ->	Pop a node
// If left is null	-> Insert new node
// Else push left -> Keep exploring
// If right is null	-> Insert new node
// Else push right ->	Continue
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    insertNode(val){
        const newNode = new TreeNode(val);
        if(!this.root){
            this.root = newNode;
            return;
        }

        const stack = [this.root];
        while(stack.length > 0){
            let currentNode = stack.pop();
            if(!currentNode.left){
                currentNode.left = newNode;
                return;
            }else{
                stack.push(currentNode.left);
            }

            if(!currentNode.right){
                currentNode.right = newNode;
                return;
            }else{
                stack.push(currentNode.right);
            }
        }
    }
}

const x = new BinaryTree();
x.insertNode(2);
x.insertNode(3);
console.log(x);
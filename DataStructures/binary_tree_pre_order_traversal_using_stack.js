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
        const newNode = new TreeNode();
        if(!this.root){
            this.root = newNode;
        }

        const stack = [this.root];
        while(stack.length > 0){
            let currentNode = stack.pop();
            while(currentNode !== null){
                stack.push(currentNode);
                currentNode = currentNode.right;
            }
            currentNode = stack.pop();
            X
        }
    }
}
class BST{
    constructor(key){
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

const insert = (root, key) => {
    if(!root) return new BST(key)
    else{
        if(root.val == key) return root;
        else if(root.val < key){
            root.right = insert(root.right, key);
        }else{
            root.left = insert(root.left, key);
        }
    }
    return root;
}

const inOrder = (root) =>{
    if(root.left) inOrder(root.left);
    console.log(root.val);
    if(root.right) inOrder(root.right);
}

const preOrder = (root) =>{
    console.log(root.val);
    if(root.left) preOrder(root.left);
    if(root.right) preOrder(root.right);
}

const postOrder = (root) =>{
    if(root.left) postOrder(root.left);
    if(root.right) postOrder(root.right);
    console.log(root.val);
}

const search = (root, key) => {
    if(!root || root === key) return root
    else if(root.val < key){
        return search(root.right, key);
    }else if(root.val > key){
        return search(root.left, key);
    }else{
        return "Not found"
    }
    
}

var listArr = [18, -5, 51, 10, 14, 32];
var r = new BST(21);

for (const val of listArr){
    r = insert(r, val);
}
const res = search(r, 22);
if(res) console.log(res);
else console.log("Not Found")

console.log("Inorder: ")
inOrder(r)
console.log("Preorder: ")
preOrder(r)
console.log("Postorder: ")
postOrder(r)

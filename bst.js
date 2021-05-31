module.exports.Node = Node;
module.exports.BST = BST;


function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;

 }
 
 function show() {
    return this.data;
 }

var bricks = 0;

 function BST() {
    this.root = null;
    this.insert = insert;
    this.bricks = bricks;
    this.count = count;
    this.countSubtree = countSubtree;    
 }
 
 function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
       this.root = n;
    }
    else {
       var current = this.root;
       var parent;
       while (true) {
          parent = current;
          if (data.size < current.data.size) {
             current = current.left;
             if (current == null) {
                parent.left = n;
                break;
             }
          }
          else {
             current = current.right;
             if (current == null) {
                parent.right = n;
                break;
             }
          }
       }
    }
 }

 function count() {
     
    countSubtree(this.root);
    return bricks;

     
 }

 function countSubtree(node) {
    if (!(node == null)) {
        countSubtree(node.left);
        bricks = bricks + 1;
       
       countSubtree(node.right);
    }
 }

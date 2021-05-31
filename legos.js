const { BST } = require("./bst");

module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

function Brick(size , color) {
    this.size = Number(size);
    this.color = String(color);
  }


function LegoPile() {
    this.datastore = new Array();
    this.insert = insert;
    this.hasBrick = hasBrick;
    this.datastore["red"] = new BST();
    this.datastore["green"] = new BST();
    this.datastore["blue"] = new BST();
    this.datastore["yellow"] = new BST();
    this.datastore["black"] = new BST();
    this.datastore["white"] = new BST();

    this.count = count;
    
 }
 
 function insert(brick) {
    this.datastore[brick.color].insert(brick.size);
 }
 
 function hasBrick(size, color) {
    
    var current = this.datastore[color].root;
    while (current.data != size) {
       if (size < current.data) {
          current = current.left;
       }
       else {
          current = current.right;
       }
       if (current == null) {
          return false;
       }
    }
    
    if (current.data != size) {
        return false;
    } else {
        return true;
    }

 } 

 function count() {
    var bricks = 0;
    
    var redBricks = this.datastore["red"].count();
    var greenBricks = this.datastore["green"].count();
    var blueBricks = this.datastore["blue"].count();
    var yellowBricks = this.datastore["yellow"].count();
    var blackBricks = this.datastore["black"].count();
    var whiteBricks = this.datastore["white"].count();

    bricks = redBricks + greenBricks + blueBricks + yellowBricks + blackBricks + whiteBricks;
    return bricks;
    
    
}


 
 

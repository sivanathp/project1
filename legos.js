const { BST } = require("./bst");

module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

function Brick(size , color) {
    this.size = Number(size);
    this.color = String(color);
  }


function LegoPile() {
    this.datastore = new Array();
    this.find = find;
    this.insert = insert;
    this.datastore["red"] = new BST();
    this.datastore["green"] = new BST();
    this.datastore["blue"] = new BST();
    this.datastore["yellow"] = new BST();
    this.datastore["black"] = new BST();
    this.datastore["white"] = new BST();
    
 }
 
 function insert(brick) {
    this.datastore[brick.color].insert(brick.size);
 }
 
 
 function find(key) {
    return this.datastore[key];
 }
 
 

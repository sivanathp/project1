var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('BST', function() {
    describe('a single node', function() {
      it('a single Node, at the root of the BST', function() {
          var brick0 = new Brick(1, "Red");
          var nums = new BST();
          nums.insert(brick);
          assert.equal(tree.root.data, brick0);
        
      });
    });
   
  });

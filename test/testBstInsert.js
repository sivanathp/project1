var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('BST', function() {
    describe('a single node', function() {
      it('a single Node, at the root of the BST', function() {
          var brick0 = new Brick(1, "Red");
          var tree = new BST();
          tree.insert(brick0);
          assert.equal(tree.root.data, brick0);
        
      });
    });

    describe('root plus a left child', function() {
        it('a single Node and left child at the root of the BST', function() {
            var brick0 = new Brick(5, "Red");
            var tree = new BST();
            tree.insert(brick0);
            var brick1 = new Brick(3, "Red");
            tree.insert(brick1);
            assert.equal(tree.root.data, brick0);
            assert.equal(tree.root.left.data, brick1);
          
        });
      });
   
  });

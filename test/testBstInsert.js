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

      describe('root plus a right child', function() {
        it('a single Node and right child at the root of the BST', function() {
            var brick0 = new Brick(5, "Red");
            var tree = new BST();
            tree.insert(brick0);
            var brick1 = new Brick(7, "Red");
            tree.insert(brick1);
            assert.equal(tree.root.data, brick0);
            assert.equal(tree.root.right.data, brick1);
          
        });
      });

      describe('root plus left and right child', function() {
        it('a root node with left and right ', function() {
            var brick0 = new Brick(5, "Red");
            var tree = new BST();
            tree.insert(brick0);
            var brick1 = new Brick(7, "Red");
            tree.insert(brick1);
            var brick2 = new Brick(3, "Red");
            tree.insert(brick2);
            assert.equal(tree.root.data, brick0);
            assert.equal(tree.root.right.data, brick1);
            assert.equal(tree.root.left.data, brick2);
          
        });
      });

      describe('root plus many left and right nodes', function() {
        it('a root node with many left and right nodes ', function() {
            var brick0 = new Brick(5, "Red");
            var tree = new BST();
            tree.insert(brick0);
            var brick1 = new Brick(7, "Red");
            tree.insert(brick1);
            var brick2 = new Brick(3, "Red");
            tree.insert(brick2);

            var brick3 = new Brick(2, "Red");
            tree.insert(brick3);
            var brick4 = new Brick(1, "Red");
            tree.insert(brick4);
            var brick5 = new Brick(8, "Red");
            tree.insert(brick5);
            var brick6 = new Brick(9, "Red");
            tree.insert(brick6);
            var brick7 = new Brick(10, "Red");
            tree.insert(brick7);
            assert.equal(tree.root.data, brick0);
            assert.equal(tree.root.right.data, brick1);
            assert.equal(tree.root.left.data, brick2);
            assert.equal(tree.root.left.left.data, brick3);
            assert.equal(tree.root.left.left.left.data, brick4);
            assert.equal(tree.root.right.right.data, brick5);
            assert.equal(tree.root.right.right.right.data, brick6);
            assert.equal(tree.root.right.right.right.right.data, brick7);
          
        });
      });
   
  });

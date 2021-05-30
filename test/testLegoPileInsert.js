var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;
const LegoPile = lego.LegoPile;

describe('LegoPile', function() {
    describe('insert one brick', function() {
      it('A single brick in lego pile', function() {
          var brick0 = new Brick(1, "red");
          var pile = new LegoPile();
          pile.insert(brick0);
          var bst = pile.datastore["red"]
          assert.equal(bst.root.data, 1);
        
      });
    });
 
    describe('insert one brick of each color', function() {
      it('A single brick of each color in lego pile', function() {
          var brick0 = new Brick(1, "red");
          var brickgreen = new Brick(2, "green");
          var brickblue = new Brick(3, "blue");
          var brickyellow = new Brick(4, "yellow");
          var brickblack = new Brick(5, "black");
          var brickwhite = new Brick(6, "white");

          var pile = new LegoPile();
          pile.insert(brick0);
          pile.insert(brickgreen);
          pile.insert(brickblue);
          pile.insert(brickyellow);
          pile.insert(brickblack);
          pile.insert(brickwhite);
          var bst = pile.datastore["red"]
          assert.equal(bst.root.data, 1);
          assert.equal(pile.datastore["green"].root.data, 2);
          assert.equal(pile.datastore["blue"].root.data, 3);
          assert.equal(pile.datastore["yellow"].root.data, 4);
          assert.equal(pile.datastore["black"].root.data, 5);
          assert.equal(pile.datastore["white"].root.data, 6);
        
      });
    });

    describe('insert several bricks of one color', function() {
      it('A several brick of one color in lego pile', function() {
          var brick1 = new Brick(1, "red");
          var brick2 = new Brick(2, "red");
          var brick3 = new Brick(3, "red");
          var brick4 = new Brick(4, "red");
          var brick5 = new Brick(5, "red");
          var brick6 = new Brick(6, "red");

          var pile = new LegoPile();
          pile.insert(brick1);
          pile.insert(brick2);
          pile.insert(brick3);
          pile.insert(brick4);
          pile.insert(brick5);
          pile.insert(brick6);
          var bst = pile.datastore["red"]
          assert.equal(bst.root.data, 1);
          assert.equal(bst.root.right.data, 2);
          assert.equal(bst.root.right.right.data, 3);
          assert.equal(bst.root.right.right.right.data, 4);
          assert.equal(bst.root.right.right.right.right.data, 5);
          assert.equal(bst.root.right.right.right.right.right.data, 6);
        
      });
    });

    describe('test to find a brick in LegoPile', function() {
      it('find a particular brick in lego pile', function() {
          var brick1 = new Brick(1, "red");
          var brick2 = new Brick(2, "red");
          var brick3 = new Brick(3, "red");
          var brick4 = new Brick(4, "red");
          var brick5 = new Brick(5, "red");
          var brick6 = new Brick(6, "red");

          var pile = new LegoPile();
          pile.insert(brick1);
          pile.insert(brick2);
          pile.insert(brick3);
          pile.insert(brick4);
          pile.insert(brick5);
          pile.insert(brick6);
          var bst = pile.datastore["red"]
          assert.equal(pile.hasBrick(3,"red"), true);
          assert.equal(pile.hasBrick(7,"red"), false);
          assert.equal(pile.hasBrick(1,"red"), true);

      });
    });
  });

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
  });

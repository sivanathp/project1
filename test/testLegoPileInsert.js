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
          
          assert.equal(pile.datastore[red], brick0.size);
        
      });
    });
 
   
  });

var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;
describe('Brick', function() {
    describe('#instanceof()', function() {
      it('should return 1 when the brick object exists', function() {
          brick = new Brick(1, "Red");
          assert.equal(brick.size , 1 , " No Brick object");
        
      });
    });
  });
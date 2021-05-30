var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;
describe('Brick', function() {
    describe('#instanceof()', function() {
      it('should return 1 when the brick object exists', function() {
          var brick = new Brick(1, "Red");
          assert.equal(brick.size , 1 , " No Brick object");
        
      });
    });
    describe('#Notinstanceof()', function() {
        it('should not create brick object ', function() {
            var brick = new Brick("Red", 1);
            assert.equal(brick.size , 1 , " No Brick object");
          
        });
      });
  });
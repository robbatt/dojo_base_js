var assert = require('assert');
describe('Array test 2', function() {
    describe('#indexOf()', function() {
        it('should return value of first element for 2', function() {
            assert.equal(1, [1,2,3].indexOf(2));
        });
    });

    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});


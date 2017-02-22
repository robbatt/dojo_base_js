const assert = require('assert');
const dummy = require('./Extended');

describe('Extended Test', function() {
    describe('# doIt()', function() {
        it('should return param unchanged', function() {
            assert.equal(1, dummy.doIt(1));
        });
    });

    describe('# doItWithException()', function() {
        it('should throw exception', function() {
            assert.throws(dummy.doItWithException, dummy.ExtendedException);
        });
    });
});


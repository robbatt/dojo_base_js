const assert = require('assert');
const extended = require('./Extended');

describe('Extended Test', function() {
    describe('# doIt()', function() {
        it('should return param unchanged', function() {
            assert.equal(1, extended.doIt(1));
        });
    });

    describe('# doItWithException()', function() {
        it('should throw exception', function() {
            assert.throws(extended.doItWithException, extended.ExtendedException);
        });
    });

    describe('# doItPartiallyCovered()', function() {
        it('should be partially covered', function() {
            assert.equal(0, extended.doItPartiallyCovered(0));
            assert.equal(1, extended.doItPartiallyCovered(1));
        });
    });

    describe('# skipping tests', function() {
        it.skip('should be skipped', function() {
            // can be used alternatively // this.skip();
        });
    });

});


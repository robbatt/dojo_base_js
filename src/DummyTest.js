const assert = require('assert');
const dummy = require('./Dummy');

describe('Dummy Test', function() {
    describe('#doIt()', function() {
        it('should return param as is', function() {
            assert.equal(1, dummy.doIt(1));
        });
    });
});


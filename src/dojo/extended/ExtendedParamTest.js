const assert = require('assert');
const extended = require('./Extended');

describe('Extended Param Test', function() {

    describe('# should do it parameterized', function() {
        const testParams = [
            {x: 0, expected: 0},
            {x: 1, expected: 1},
            {x: 2, expected: 2}
        ];

        function test(params) {
            it('should run with param' + params.x, function() {
                assert.equal(extended.doIt(params.x), params.expected);
            })
        }

        testParams.forEach(test);

    });

});


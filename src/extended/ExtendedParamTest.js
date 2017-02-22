const assert = require('assert');
const extended = require('./Extended');

describe('Extended Param Test', function() {

    describe('# should do it parameterized', function() {
        const testSet = [
            {param: 0, expected: 0},
            {param: 1, expected: 1},
            {param: 2, expected: 2}
        ];

        function test(testParams) {
            it('should run with param' + testParams.param, function() {
                assert.equal(extended.doIt(testParams.param), testParams.expected);
            })
        }

        testSet.forEach(test);

    });

});


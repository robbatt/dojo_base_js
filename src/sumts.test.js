"use strict";
var SumTS = require("./sumts");
it('adds 1 + 2 to equal 3', function () {
    expect(SumTS.sum(1, 2)).toBe(3);
});

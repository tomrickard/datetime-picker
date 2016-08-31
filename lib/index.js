"use strict";
var point = function (x, y, z) {
    if (z === void 0) { z = 0; }
    return {
        type: "2dPoint",
        center: [x, y, z]
    };
};
var arc = function (x, y, z) {
    if (z === void 0) { z = 0; }
    return {
        type: "2dPoint",
        center: [x, y, z]
    };
};
var check = require('./type-checker');
console.log(check.isBoolean(true));
function test(fname, sname) {
    return fname + sname;
}

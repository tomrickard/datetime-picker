"use strict";
function getType(variable) {
    return Object.prototype.toString.call(variable).slice(8, -1);
}
function checkType(type) {
    return function (variable) {
        return getType(variable) === type;
    };
}
// Object to contain type checking functions
var check = {};
exports.check = check;
function checkTypeExplicit(type, variable) {
    return getType(variable) === type;
}
function checkArgumentsExplicit(types, args) {
    var args = Array.prototype.slice.call(args);
    if (args.length !== types.length) {
        throw new Error("Arguments length does not match types length");
    }
    if (args.length === 0) {
        throw new Error("No arguments or types supplied");
    }
    args.forEach(function (arg, i) {
        if (!checkTypeExplicit(arg, types[i])) {
            throw new TypeError("argument: " + arg + " is not type: " + types[i]);
        }
    });
}
check.args = checkArgumentsExplicit;
check.type = checkTypeExplicit;
// Create short hand functions
// i.e. 
// check.number()
// check.string() etc.
['Number', 'String', 'Boolean', 'Array', 'Object', 'Function', 'Date', 'RegExp', 'Undefined', 'Null'].forEach(function (type) {
    check[type.toLowerCase()] = checkType(type);
});

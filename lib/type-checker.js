"use strict";
function type(variable) {
    return Object.prototype.toString.call(variable);
}
function isNumber(variable) {
    return type(variable) === '[object Number]';
}
exports.isNumber = isNumber;
function isString(variable) {
    return type(variable) === '[object String]';
}
exports.isString = isString;
function isBoolean(variable) {
    return type(variable) === '[object Boolean]';
}
exports.isBoolean = isBoolean;
function isArray(variable) {
    return type(variable) === '[object Array]';
}
exports.isArray = isArray;
function isObject(variable) {
    return type(variable) === '[object Object]';
}
exports.isObject = isObject;
function isFunction(variable) {
    return type(variable) === '[object Function]';
}
exports.isFunction = isFunction;
function isDate(variable) {
    return type(variable) === '[object Date]';
}
exports.isDate = isDate;
function isRegExp(variable) {
    return type(variable) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
function isUndefined(variable) {
    return type(variable) === '[object Undefined]';
}
exports.isUndefined = isUndefined;
function isNull(variable) {
    return type(variable) === '[object Null]';
}
exports.isNull = isNull;
function types(args, types) {
}
exports.types = types;

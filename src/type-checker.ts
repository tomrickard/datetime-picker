function type(variable) {
	return Object.prototype.toString.call(variable)
}

export function isNumber(variable) {
	return type(variable) === '[object Number]';
}
export function isString(variable) {
	return type(variable) === '[object String]';
}
export function isBoolean(variable) {
	return type(variable) === '[object Boolean]'
}
export function isArray(variable) {
	return type(variable) === '[object Array]'
}
export function isObject(variable) {
	return type(variable) === '[object Object]'
}
export function isFunction(variable) {
	return type(variable) === '[object Function]'
}
export function isDate(variable) {
	return type(variable) === '[object Date]'
}
export function isRegExp(variable) {
	return type(variable) === '[object RegExp]'
}
export function isUndefined(variable) {
	return type(variable) === '[object Undefined]'
}
export function isNull(variable) {
	return type(variable) === '[object Null]'
}

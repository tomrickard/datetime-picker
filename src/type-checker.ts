export interface Check {
	args?: Function;
	type?: Function;
	number?: Function;
	string?: Function;
	boolean?: Function;
	array?: Function;
	object?: Function;
	function?: Function;
	date?: Function;
	regexp?: Function;
	undefined?: Function;
	null?: Function;
}

function getType(variable: any) {
	return Object.prototype.toString.call(variable).slice(8,-1)
}

function checkType(type: string): Function {
	return function (variable) {
		return getType(variable) === type;
	}
}

// Object to contain type checking functions
var check: Check = {};

function checkTypeExplicit(type: string, variable: any): boolean {
	return getType(variable) === type;
}

function checkArgumentsExplicit(types, args) {
	var args = Array.prototype.slice.call(args);
	if (args.length !== types.length) { throw new Error(`Arguments length does not match types length`) }
	if (args.length === 0) { throw new Error(`No arguments or types supplied`) }
	args.forEach((arg, i) => {
		if( !checkTypeExplicit(arg, types[i]) ) { throw new TypeError(`argument: ${arg} is not type: ${types[i]}`) }
	});
}

check.args = checkArgumentsExplicit;
check.type = checkTypeExplicit;

// Create short hand functions
// i.e. 
// check.number()
// check.string() etc.
['Number', 'String', 'Boolean', 'Array', 'Object', 'Function', 'Date', 'RegExp', 'Undefined', 'Null'].forEach((type) => {
	check[type.toLowerCase()] = checkType(type);
});

export { check }
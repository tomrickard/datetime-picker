var Foo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var type_checker_1 = __webpack_require__(1);
	type_checker_1.check.type('Number', 1);


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
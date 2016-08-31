var expect = require('chai').expect;
var check = require('../lib/type-checker.js');

describe('Test type checker', function () {

	it('Check Number', function () {
		expect(check.isNumber( 1 )).to.be.true;
		expect(check.isNumber( 0 )).to.be.true;
		expect(check.isNumber( 0.5 )).to.be.true;
	});

	it('Check String', function () {
		expect(check.isString('a')).to.be.true;
	});

	it('Check Boolean', function () {
		expect(check.isBoolean( true )).to.be.true;
		expect(check.isBoolean( false )).to.be.true;
	});

	it('Check Array', function () {
		expect(check.isArray( [] )).to.be.true;
	});

	it('Check Object', function () {
		expect(check.isObject( {} )).to.be.true;
	});

	it('Check Function', function () {
		expect(check.isFunction( function(){}) ).to.be.true;
	});

	it('Check Date', function () {
		expect(check.isDate( new Date() )).to.be.true;
	});

	it('Check RegExp', function () {
		expect(check.isRegExp( /a/ )).to.be.true;
	});

	it('Check Undefined', function () {
		expect(check.isUndefined( undefined )).to.be.true;
	});

	it('Check Null', function () {
		expect(check.isNull( null )).to.be.true;
	});

});
var expect = require('chai').expect;
var check = require('../lib/type-checker.js').check;

describe('Test short-hand type checking', function () {
	it('Check Number', function () {
		expect(check.number( 1 )).to.be.true;
		expect(check.number( 0 )).to.be.true;
		expect(check.number( 0.5 )).to.be.true;
	});

	it('Check String', function () {
		expect(check.string('a')).to.be.true;
	});

	it('Check Boolean', function () {
		expect(check.boolean( true )).to.be.true;
		expect(check.boolean( false )).to.be.true;
	});

	it('Check Array', function () {
		expect(check.array( [] )).to.be.true;
	});

	it('Check Object', function () {
		expect(check.object( {} )).to.be.true;
	});

	it('Check Function', function () {
		expect(check.function( function(){} ) ).to.be.true;
	});

	it('Check Date', function () {
		expect(check.date( new Date() )).to.be.true;
	});

	it('Check RegExp', function () {
		expect(check.regexp( /a/ )).to.be.true;
	});

	it('Check Undefined', function () {
		expect(check.undefined( undefined )).to.be.true;
	});

	it('Check Null', function () {
		expect(check.null( null )).to.be.true;
	});
})

describe('Test checking arguments', function () {

	var base = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
		check.args(arguments, ['Number', 'String', 'Boolean', 'Array', 'Object', 'Function', 'Date', 'RegExp', 'Undefined', 'Null'])
		return true;
	}

	it('Should return true with correct arguments', function () {
		expect(base(0, 'a', true, [0,1], {a:'b'}, function(){}, new Date(), /a/, undefined, null)).to.be.true;
	})

	it('Should throw TypeError with incorrect arguments', function () {
		var incorrectArgs = function () {
			base('a', 'a', true, [0,1], {a:'b'}, function(){}, new Date(), /a/, undefined, null)
		}
		expect(incorrectArgs).to.throw(TypeError);
	})

	it('Should throw Error for length mismatch', function () {
		var mismatched = function () {
			base(0, 'a', true, [0,1], {a:'b'});
		}
		expect(mismatched).to.throw(Error);
	})

	it('Should throw error is no args or types', function () {
		var noArgs = function () {
			check.args();
		}
		expect(noArgs).to.throw(Error);
	})

})
interface XYPoint {
	type: "2dPoint",
	center: [number, number, number]
}

interface XYArc {

}

interface XYLine {

}

interface XYCircle {

}

interface XYPath {
	type: "2dPath"
	segments: (XYArc | XYLine)[]
}

interface XYNurbs {

}

interface XYModel {

}

var point = function ( x, y, z=0 ): XYPoint {
	return {
		type: "2dPoint",
		center: [x, y, z]
	}
}

var arc = function ( x, y, z=0 ): XYPoint {
	return {
		type: "2dPoint",
		center: [x, y, z]
	}
}

import * as check from './type-checker'
console.log(check.isBoolean(true));

function test(fname, sname?) {
	return fname + sname
}
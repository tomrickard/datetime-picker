module.exports = {
	entry: './lib/index.js',
	output: {
		path: './dist',
		filename: 'bundle.js',
		libraryTarget: "var",
		library: "Foo"
	}
};
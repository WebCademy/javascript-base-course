const path = require('path')

module.exports = {
	entry: {
		index: './js/index.js',
		new: './js/new.js',
		hints: './js/hints.js',
		'view-and-edit': './js/view-and-edit.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}]
	},
	devServer: {
		overlay: true
	}
}
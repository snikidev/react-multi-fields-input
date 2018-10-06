const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist'
	},

	devtool: 'source-map',

	resolve: {
		extensions: [ '.js', '.jsx', '.json' ]
	},

	stats: 'errors-only',

	node: {
		fs: 'empty'
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js?$/,
				loader: 'eslint-loader',
				exclude: /node_modules|dist/,
				options: {
					configFile: './.eslintrc.json',
					formatter: require('eslint-friendly-formatter'),
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ '@babel/preset-env', '@babel/preset-react', '@babel/preset-flow' ]
				}
			}
		]
	},

	externals: {
		react: 'react',
		'react-dom': 'reactDOM'
	},

	devtool: 'source-map'
};

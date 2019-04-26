const path = require('path');
const webpack = require('webpack');
const lintFormatter = require('eslint-formatter-friendly');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
		library: '',
		libraryTarget: 'commonjs2'
	},

	devtool: 'source-map',

	stats: 'errors-only',

	node: {
		fs: 'empty'
	},

	resolve: {
		modules: [ path.resolve(__dirname, './src'), 'node_modules' ],
		extensions: [ '.ts', '.tsx', '.js', '.json' ]
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.tsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
				options: {
					configFile: './.eslintrc.json',
					formatter: lintFormatter,
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=app/fonts/[name].[ext]'
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
		]
	},
	plugins: [ new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), new UglifyJsPlugin() ],

	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'React',
			root: 'React'
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'ReactDOM',
			root: 'ReactDOM'
		},
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components'
		}
	}
};

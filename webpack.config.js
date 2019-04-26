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
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
		]
	},

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

// const path = require('path');
// const webpack = require('webpack');
// const lintFormatter = require('eslint-formatter-friendly');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// module.exports = {
// 	entry: './src/index.js',
// 	output: {
// 		filename: 'index.js',
// 		path: path.resolve(__dirname, 'dist'),
// 		publicPath: '/dist',
// 		library: '',
// 		libraryTarget: 'commonjs2'
// 	},
// 	resolve: {
// 		modules: [ path.resolve(__dirname, './src'), 'node_modules' ],
// 		extensions: [ '.js', '.jsx', '.json' ]
// 	},

// 	externals: {
// 		react: {
// 			commonjs: 'react',
// 			commonjs2: 'react',
// 			amd: 'React',
// 			root: 'React'
// 		},
// 		'react-dom': {
// 			commonjs: 'react-dom',
// 			commonjs2: 'react-dom',
// 			amd: 'ReactDOM',
// 			root: 'ReactDOM'
// 		},
// 		'styled-components': {
// 			commonjs: 'styled-components',
// 			commonjs2: 'styled-components'
// 		}
// 	},

// 	stats: 'errors-only',

// 	node: {
// 		fs: 'empty'
// 	},

// module: {
// 	rules: [
// 		{
// 			enforce: 'pre',
// 			test: /\.js?$/,
// 			loader: 'eslint-loader',
// 			exclude: /node_modules/,
// 			options: {
// 				configFile: './.eslintrc.json',
// 				formatter: lintFormatter,
// 				failOnWarning: false,
// 				failOnError: false
// 			}
// 		},
// 		{
// 			test: /\.(eot|svg|ttf|woff|woff2)$/,
// 			loader: 'file-loader?name=app/fonts/[name].[ext]'
// 		},
// 		{
// 			test: /\.js?$/,
// 			loader: 'babel-loader',
// 			exclude: /node_modules/
// 		},
// 		{
// 			test: /\.(png|jpg|gif)$/,
// 			use: [
// 				{
// 					loader: 'file-loader',
// 					options: {}
// 				}
// 			]
// 		}
// 	]
// },
// 	devtool: 'inline-source-map',

// 	plugins: [ new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), new UglifyJsPlugin() ]
// };

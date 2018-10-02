const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
		libraryTarget: 'commonjs2'
	},

	devtool: 'inline-source-map',

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
				exclude: /node_modules/,
				options: {
					configFile: './.eslintrc.json',
					formatter: require('eslint-friendly-formatter'),
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=app/fonts/[name].[ext]'
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

	externals: { react: 'commonjs react' },

	devServer: {
		contentBase: path.join(__dirname, '/'),
		compress: true,
		port: 4000,
		stats: 'minimal',
		hot: true
	},

	devtool: 'source-map',

	plugins: [
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};

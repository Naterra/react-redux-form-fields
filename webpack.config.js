var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src',
	output: {
		path: path.resolve('lib'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	plugins: [new MiniCssExtractPlugin()],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			react: path.resolve(path.join(__dirname, './node_modules/react')),
		}
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: { loader:'babel-loader'},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	externals: {
		react: 'react',
	},
};

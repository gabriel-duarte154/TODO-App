const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpeg|jpg|gif|ico|svg)$/i,
				use: 'asest/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'TODO',
			template: './src/index.html',
			favicon: './src/favicon/favicon.svg'
		}),
	],
};

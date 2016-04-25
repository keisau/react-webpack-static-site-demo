import webpack from 'webpack'
import path from 'path'

const srcPath = path.resolve(__dirname, 'src')
const jsPath = path.resolve(srcPath, 'js')
const buildPath = path.resolve(__dirname, 'build')

module.exports = {
	entry: [
		path.resolve(jsPath, 'index.js')
	],
	output: {
		filename: 'bundle.js',
		libraryTarget: 'umd',
		path: buildPath,
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.css$/, loader: 'style!css!resolve-url' },
			{ test: /\.scss$/, loader: 'style!css!sass!resolve-url' },
			{ test: /\.json$/, loader: 'json' },
		]
	},
	devServer: {
		contentBase: buildPath,
		historyApiFallback: true
	}
}

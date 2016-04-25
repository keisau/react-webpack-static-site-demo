import webpack from 'webpack'
import path from 'path'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const srcPath = path.resolve(__dirname, 'src')
const jsPath = path.resolve(srcPath, 'js')
const buildPath = path.resolve(__dirname, 'build')

import locals from './locals'

export default {
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
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
			{ test: /\.json$/, loader: 'json' }
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new StaticSiteGeneratorPlugin('main', locals.path, locals),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.ProvidePlugin({
        _: "lodash"
    })
	]
}

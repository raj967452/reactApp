const debug = process.env.NODE_ENV !== 'production';
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: debug ? 'inline-sourcemap' : null,
	context: path.join(__dirname, 'app'),
	entry: path.join(__dirname, 'app', 'app-client.js'),
	output: {
		path: path.join(__dirname, 'app', 'static', 'js'),
    publicPath: "/js/",
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: ['babel-loader'],
				query: {
					cacheDirectory: 'babel_cache',
					presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
				}
			}
		]
	},
	devServer: {
		contentBase: "app/static/",
		colors: true,
		inline: true,
		compress: true,
		port:8080,
	  historyApiFallback: {
      index: '/index-static.html'
    }
	},
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
}
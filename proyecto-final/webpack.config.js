/* eslint-disable no-tabs */
const path = require('path');

// PLUGINS Y MINIFICADORES DE CSSS Y SCSS/SASS
// Para reducir el tamaño de las hojas de estilo de nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para el template del HTML que va a usar Webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Para reducir los CSS
const { SourceMapDevToolPlugin } = require('webpack'); // Para conocer el Source Map de nuestro proyecto

// Configuración del puerto
const port = process.env.PORT || 3000;

// Exportar configuración de WebPack
module.exports = {
	mode: 'developement',
	entry: {
		index: './src/index.jsx',
	},
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
        clean: true,
		publicPath: '/',
	},
	context: path.resolve(__dirname),
	devServer: {
		port,
		historyApiFallback: true,
	},
	module: {
		rules: [
			// Reglas para archivos de JS y JSX
			// Tienen que pasar el LINTING para poder pasar
			{
				enforce: 'pre',
				test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				use: ['eslint-loader', 'source-map-loader'],
			},
			// Reglas para archivos JS y JSX
			// Reglas de Babel Es y JSX
			{
				test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env', '@babel/react'],
					},
				},
			},
			// Reglas para archivos CSS y SASS y SCSS para minificarlos y cargarlos en el bundle
			{
				test: /(\.css|\.scss|\.sass)$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			// Reglas para los archivos de imágenes
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		// Template HTML
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: './css/styles.css',
		}),
		new SourceMapDevToolPlugin({
			filename: '[file].map',
		}),
	],
	resolve: {
		extensions: ['.js', '.jxs', '.css', '.scss', '.sass'],
		modules: ['node_modules'],
		alias: {
			'react-redux': path.join(__dirname, '/node_modules/react-redux/dist/react-redux.min'),
		},
	},
};

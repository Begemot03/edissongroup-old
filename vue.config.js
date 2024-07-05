const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin-next');
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true
					}
				}
			})
		],
		splitChunks: {
			chunks: 'all'
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
		},
	},
    plugins: [
	//   new HtmlWebpackPlugin({
	// 	template: 'index.html',
	// 	filename: path.resolve(__dirname, 'dist/index.html')
	//   }),
	  new CompressionPlugin({
        algorithm: 'gzip', // Использовать алгоритм Gzip для сжатия файлов
        test: /\.(js|css|html|svg)$/, // Сжимать только определенные файлы
        threshold: 10240, // Минимальный размер файла для сжатия (10 KB)
        minRatio: 0.8, // Минимальное соотношение для сжатых файлов (80%)
      }),
	  ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
	  new PrerenderSPAPlugin({
		staticDir: path.join(__dirname, 'dist'),
		routes: [ '/', '/about', '/catalog', '/examples', '/personal' ],
	  })
    ],
  }
})

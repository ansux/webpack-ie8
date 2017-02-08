var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var src = path.resolve(__dirname, '../src')

module.exports = {
  entry: {
    polyfill: [
      'es5-shim',
      'es5-shim/es5-sham'
    ],
    app: ['./src/app']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'static': path.resolve(__dirname, '../static'),
      'src': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: src,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: src
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
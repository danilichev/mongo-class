const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const INDEX = 'public/index';
const VENDOR = 'public/vendor';
const MANIFEST = 'public/manifest';
const TEMPLATE_PATH = './client/index.html';

module.exports = {
  entry: {
    [INDEX]: './client/index.js',
    [VENDOR]: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../client')],
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [VENDOR, MANIFEST],
    }),
    new ExtractTextPlugin('public/main.css'),
    new HtmlWebpackPlugin({
      filename: `${INDEX}.html`,
      template: TEMPLATE_PATH,
    }),
  ],
};

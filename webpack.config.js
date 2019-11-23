const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        title: "{{ProjectName}}"
      })
  ]
};

module.exports = config;
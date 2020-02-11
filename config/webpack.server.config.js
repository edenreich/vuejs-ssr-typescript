const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, '..', 'src', 'server.ts'),
  target: 'node',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.ts', '.js','.vue'],
    alias: {
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@components': path.resolve(__dirname, '../src/components'),
    }
  },
  module: {
    rules: [
      { 
        test: /\.vue$/, 
        loader: 'vue-loader' 
      },
      { 
        test: /\.ts$/, 
        loader: 'ts-loader', 
        exclude: /node_modules/, 
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new NodemonPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      { 
        from: path.resolve(__dirname, '../src/layouts/main.html'), 
        to: path.resolve(__dirname, '../dist/public')
      }
    ])
  ]
});

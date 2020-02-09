import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config.js';
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin';
import path from 'path';

const config: webpack.Configuration =  merge(baseConfig, {
  entry: 'server.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.vue', '.ts']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
});

export default config;
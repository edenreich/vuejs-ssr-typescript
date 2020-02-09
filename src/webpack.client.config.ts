import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config.js';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin';
import path from 'path';

const config: webpack.Configuration = merge(baseConfig, {
  entry: 'client.js',
  output: {
    path: path.join(__dirname, '..', 'dist', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.vue', '.ts']
  },
  module: {
    rules: []
  },
  plugins: [
    new VueSSRClientPlugin()
  ]
});

export default config;
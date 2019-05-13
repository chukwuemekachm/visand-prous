const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.join(__dirname, '../dist');
const SRC_DIR =  './src';

module.exports = {
  entry: ['@babel/polyfill', `${SRC_DIR}/index.js`],
  output: {
    path: DIST_DIR,
    filename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      _components: path.resolve(__dirname, 'src/components/'),
      _atoms: path.resolve(__dirname, 'src/components/atoms/'),
      _molecules: path.resolve(__dirname, 'src/components/molecules/'),
      _organisms: path.resolve(__dirname, 'src/components/organisms/'),
      _templates: path.resolve(__dirname, 'src/components/templates/'),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              "@babel/preset-env", {
                "useBuiltIns": "entry"
              }],
              "@babel/preset-react"],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-arrow-functions',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-regenerator',
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};

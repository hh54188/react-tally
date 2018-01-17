const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [new CleanWebpackPlugin(['public/*.js', 'public/*.map'])],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
}

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var cssLoader = process.env.NODE_ENV === 'production' ?
  ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
  }) : ['style-loader', 'css-loader', 'sass-loader'];

var cssPlugin = process.env.NODE_ENV === 'production' ?
  new ExtractTextPlugin({
    filename: 'bundle.css',
    allChunks: true
  }) : function(){return};
module.exports = {
  devtool:'sourse-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    // open: true,
    proxy: [{
      path: '/api/',
      target: 'http://localhost:8090'
    }],
    historyApiFallback: {
      index: '/public/index.html'
    },
    clientLogLevel: "error"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: cssLoader
      }
    ]
  },
  plugins: [
    cssPlugin
  ]
}
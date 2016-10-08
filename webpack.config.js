/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: "html-loader!markdown-loader?gfm=false"
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets:['react', 'es2015'],
          env: {
            development: {
              plugins: [["react-transform", {
                transforms: [{
                  transform: "react-transform-hmr",
                  imports: ["react"],
                  locals: ["module"]
                }]
              }]]
            }
          }
        }
      }, {
        test: /\.css$/,
        loaders: ["style", "css"],
      }, {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png",
      }, {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif",
      }, {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg",
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      }
  ]
  }
};

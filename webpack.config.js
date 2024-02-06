const port = process.env.PORT || 8685;

const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
// const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", //inject dom
          "css-loader", //css ---> main js bundle
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test:/\.(svg|png|jpg)$/,
        use:{
            loader:'file-loader',
            options:{
                name:'[name].[hash].[ext]',
                outputPath:'images'
            }
        }
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    // new CleanWebpackPlugin(),
  ],

  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};

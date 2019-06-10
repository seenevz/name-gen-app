const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
   entry: {
      app: "./src/index.js",
   },
   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: "Name generator",
         template: "src/landing.html",
      }),
   ],
   optimization: {
      splitChunks: {
         chunks: "all",
      },
   },
   output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
};

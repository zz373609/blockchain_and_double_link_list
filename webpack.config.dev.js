var path = require("path")
var webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'development',
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack-hot-middleware/client",
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "font/[hash:16].[ext]"
          }
        }],
        exclude: [
          path.resolve(__dirname, "./node_modules")
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "img/[hash:16].[ext]"
          }
        }]
      },
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: "babel-loader"
        }],
        exclude: [
          path.resolve(__dirname, "./node_modules")
        ],
        include: [
          path.resolve(__dirname, "./src")
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "style-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]_[hash:4]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify(new Date().toLocaleString())
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}


const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({}), new TerserPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
})

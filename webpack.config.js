const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // mode: 'development',
  stats: {
    warnings: false,
  },
  entry: './src/scripts.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: 'localhost',
    open: true,
    port: '3000',
    static: './public',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/images/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
};

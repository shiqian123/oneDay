const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});
const URL = 'localhost'
module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx$|\.js$/,
    //     loader: 'eslint-loader',
    //     include: `${__dirname}/src`,
    //     exclude: /bundle\.js$/,
    //   },
    // ],
    loaders: [   {test: /\.css$/,loader: 'style-loader!css-loader'},{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  devServer: {
    inline: true,
    port: 8000,
    host: URL,
  },
  devtool: 'source-map',
  plugins: [HTMLWebpackPluginConfig],
};

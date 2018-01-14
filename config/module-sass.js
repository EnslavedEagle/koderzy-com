const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader?-url',
    use: ['css-loader?-url', 'sass-loader']
  })
};

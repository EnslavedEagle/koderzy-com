const paths = require('./paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new CopyWebpackPlugin([
  { from: 'src/img', to: paths.dist('img') },
  { from: 'src/**.ico', to: paths.dist() },
  { from: 'src/robots.txt', to: paths.dist() }
]);
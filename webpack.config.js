const os = require('os');
const paths = require('./config/paths');
const babel = require('./config/module-babel');
const sass = require('./config/module-sass');
const handlebars = require('./config/plugin-handlebars');
const extractSass = require('./config/plugin-extract-sass');
const filesCopy = require('./config/plugin-copy');
const imageminModule = require('./config/module-imagemin');
const imageminPlugin = require('./config/plugin-imagemin');

const app = paths.src('app.js');
const styles = paths.src('style.scss');

const webpackConfig = {
  entry: {
    app: ['babel-polyfill', app, styles],
  },
  output: {
    filename: 'bundle.js',
    path: paths.dist(),
  },
  module: {
    rules: [
      babel,
      sass,
      imageminModule
    ]
  },
  plugins: [
    handlebars,
    extractSass,
    filesCopy,
    imageminPlugin
  ]
}

module.exports = webpackConfig;
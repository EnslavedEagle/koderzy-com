const paths = require('./paths');
const handlebars = require('handlebars-webpack-plugin');

module.exports = new handlebars({
  entry: paths.src('*.hbs'),
  output: paths.dist('[name].html'),
  partials: [
    paths.src('partials/**/*.hbs')
  ],
  data: paths.src('index.json')
});

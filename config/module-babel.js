module.exports = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['last 2 versions', 'safari >= 8']
          }
        }]
      ],
      plugins: [require('babel-plugin-transform-object-rest-spread')]
    }
  }
};

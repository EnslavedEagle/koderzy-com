module.exports = {
  loader: 'file-loader',
  options: {
      emitFile: true,
      name: '[path][name].[ext]'
  },
  test: /\.(jpe?g|png|gif|svg)$/i
};

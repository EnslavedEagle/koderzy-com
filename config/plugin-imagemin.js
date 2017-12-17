const os = require('os');
const { ImageminWebpackPlugin } = require('imagemin-webpack');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');

const imageminManifest = {};
const plugins = [
  imageminGifsicle(),
  imageminJpegRecompress({
    accurate: true,
    quality: 'high',
    target: .8,
    min: .8,
    loops: 1
  }),
  imageminPngquant({
    floyd: .1,
    quality: 90,
    speed: 9
  })
];

module.exports = new ImageminWebpackPlugin({
  bail: false,
  excludeChunksAssets: false,
  imageminOptions: {
    plugins
  },
  manifest: imageminManifest,
  maxConcurrency: os.cpus().length,
  name: '[path][name].[ext]',
  test: /\.(jpe?g|png|gif|svg)$/i
});
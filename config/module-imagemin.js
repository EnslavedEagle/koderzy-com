module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
      {
          loader: 'file-loader' // Or `url-loader`.
      },
      {
          loader: imageminLoader,
          options: {
            plugins: [
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
            ]
          }
      }
  ]
}
;

module.exports = options => {
  return {
    entry: './js/sounds.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
       port: 1999
    },
  }
}

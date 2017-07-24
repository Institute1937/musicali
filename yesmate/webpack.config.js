module.exports = options => {
  return {
    entry: './js/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
       port: 1998
    },
  }
}

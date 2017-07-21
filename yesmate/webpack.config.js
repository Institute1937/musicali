module.exports = options => {
  return {
    entry: './js/index.js',
    output: {
      filename: 'bundle.js',
    },
    devServer: {
       port: 1998
    },
    module: {
      rules: [{
        loader: 'babel-loader',
      }],
    },
  }
}

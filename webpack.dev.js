// define webpack dev server
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
    inline: true,
    port: 3000
  }
})
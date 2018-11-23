const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DIST_PATH = path.resolve(__dirname, '/dist');
const devMode = process.env.NODE_ENV !== 'production'

const config = {
  // entry: [
  //   'webpack-dev-server/client?http://localhost:3000',
  //   './src/index.js'
  // ],
  // output: {
  //   path: DIST_PATH,
  //   filename: 'bundle.js',
  //   publicPath: '/'
  // },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },{
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', //output to <style> tag
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } }, // parse css to js, resolves any dependencies
          { loader: 'sass-loader', options: { sourceMap: true } } // transform sass to css
        ]
      },{
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },{
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Light Blog',
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({ 
      'process.env.NODE_ENV': JSON.stringify(devMode ? 'development' : 'production')
    }), 
    new webpack.HotModuleReplacementPlugin()
  ]
}

config.devtool = 'inline-source-map'
config.devServer = {
  historyApiFallback: true,
  publicPath: '/',
  hot: true,
  inline: true,
  port: 3000
}
  
module.exports = config;
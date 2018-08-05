const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx'
        ]
    },
    // devtool: 'source-map',
    // output: {
    //     path: path.join(__dirname, 'build'),
    //     filename: '[name].js',
    //     publicPath: '/'
    // },
    module: {
      rules: [
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
          test: /\.(js|jsx)$/,
          include: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules/@salesforce/design-system-react'),
          ],
          use: [
            {
              loader: "babel-loader",
            }
          ]
        },
        {
          test: /\.min\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'dist/public/css/lds'
              //Serve this up using your static web server
          }
        },
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
        // new webpack.DefinePlugin({
        //   'process.env': { NODE_ENV: JSON.stringify('production') }
        // }),
        // new ExtractTextPlugin('[name].css')
      ]
  };
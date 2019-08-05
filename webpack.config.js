var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@actions': path.resolve(__dirname, './src/actions'),
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@images': path.resolve(__dirname, './src/components/images'),

    }
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
         use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']},
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: false,
  entry: {
    'app': './src/index',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  externals: {
    'react': "React",
    'react-dom': 'ReactDOM',
    'antd': 'antd'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]
}

const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      // 'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
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
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  devServer: {
    //https://webpack.github.io/docs/webpack-dev-server.html#proxy
    //proxy: {
    //  '/api': {
    //    target: 'http://jsonplaceholder.typicode.com/',
    //    changeOrigin: true,
    //    auth: 'NAME:PASSWORD',
    //    pathRewrite: { "^/api" : "" }
    //  }
    //}
  }
}

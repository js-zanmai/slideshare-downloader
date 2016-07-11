import webpack from 'webpack';

export default {
  entry: {
    frontend: __dirname + '/frontend/src/index.js'
  },
  output: {
    path: __dirname + '/frontend/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'inline-source-map',
  /*
  plugins: [
    new webpack.optimize.UglifyJsPlugin()  
  ],*/
  module: { 
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel'
      }, 
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ] 
  }
};
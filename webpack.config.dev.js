var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './client/index.js',
      './client/css/styles.scss'
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname,
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: 'http://0.0.0.0:8000/',
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      'client',
      'node_modules',
      'css',
      'js'
    ],
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true')
      }, {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new ExtractTextPlugin('styles.css')
  ]
};

var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


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
        // loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true')
        loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      }, {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
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
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 3000,
    //   proxy: 'http://localhost:8000/'
    // }, {
    //   reload: false
    // }),
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
    // If I want to use sourceMap and reload css, I should't use extract text plugin.
    // https://ihaveabackup.net/2015/08/17/sass-with-sourcemaps-webpack-and-live-reload
    // new ExtractTextPlugin('styles.css')
  ]
};

import Express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import serverConfig from './config';
import bookmarks from './routes/bookmark.routes';
import tags from './routes/tag.routes';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}


// MongoDB Connection
mongoose.Promise = global.Promise;
mongoose.connect(serverConfig.mongoURL, (err) => {
  if (err) {
    console.error('Can not connect mongodb!');
    throw err;
  }
});

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../client')));
app.use('/api', bookmarks);
app.use('/api', tags);


// Start app
app.listen(serverConfig.port, err => {
  if (!err) {
    console.log(`App is running on port: ${serverConfig.port}!`);
  }
});

export default app;

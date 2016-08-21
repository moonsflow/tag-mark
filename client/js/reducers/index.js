import { combineReducers } from 'redux';

import bookmarks from './bookmarkReducer';
import page from './pageReducer';

export default combineReducers({
  bookmarks,
  page
})

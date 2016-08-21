import axios from 'axios';

export function fetchBookmarks() {
  return function(dispatch) {
    axios.get('/api/bookmarks')
      .then((response) => {
        dispatch({ type: 'FETCH_BOOKMARKS_FULFILLED', payload: response.data.bookmarks });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_BOOKMARKS_REJECTED', payload: err });
      })
  }
}

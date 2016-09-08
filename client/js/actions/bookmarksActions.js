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

export function deleteBookmarks(cuid) {
  return function(dispatch) {
    axios.delete(`/api/bookmarks/${cuid}`)
      .then((response) => {
        dispatch({ type: 'DELETE_BOOKMARK_FULFILLED', payload: cuid });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_BOOKMARK_REJECTED', payload: err });
      })
  }
}


export function postBookmark(post) {
  return function(dispatch) {
    axios.post('/api/bookmarks', post)
      .then((response) => {
        console.log(response);
        dispatch({ type: 'POST_BOOKMARK_FULFILLED', payload: response.data.bookmark });
      })
      .catch((err) => {
        dispatch({ type: 'POST_BOOKMARK_REJECTED', payload: err });
      })
  }
}

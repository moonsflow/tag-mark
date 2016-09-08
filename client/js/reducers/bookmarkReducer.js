
export default function reducer(state={
    bookmarks: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {

    case 'FETCH_BOOKMARKS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        bookmarks: action.payload,
      }
    }
    case 'FETCH_BOOKMARKS_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }

    case 'DELETE_BOOKMARK' : {
      return { ...state, fetching: true, fetched: false };
    }
    case 'DELETE_BOOKMARK_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        bookmarks: state.bookmarks.filter( n => { return n.cuid !== action.payload })
      }
    }
    case 'POST_BOOKMARK_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        bookmarks: [action.payload].concat(state.bookmarks)
      }
    }
  }
  return state;
}

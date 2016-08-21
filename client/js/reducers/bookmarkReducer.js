export default function reducer(state={
    bookmarks: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    case 'FETCH_BOOKMARKS': {
      return { ...state, fetching: true };
    }
    case 'FETCH_BOOKMARKS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        bookmarks: action.payload,
      }
    }
    case 'FETCH_BOOKMARKS_REJECTED' : {
      return { ...state, fetching: false, error: action.payload };
    }
  }
  return state;
}

export default function reducer(state={
  url: '/'
}, action) {

  switch (action.type) {
    case 'MOVE_PAGE': {
      return { ...state, url: action.payload };
    }
  }
  return state;
}

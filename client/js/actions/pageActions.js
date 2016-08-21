export function movePage(url) {
  return {
    type: 'MOVE_PAGE',
    payload: url,
  }
}

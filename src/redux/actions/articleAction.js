export function fetchDataStart (payload = '') {
  return { type: 'FETCH_ARTICLES', params: payload }
}

export function fetchFailData () {
  return { type: 'FETCH_ARTICLE_FAIL' }
}

export function fetchSuccessData (payload) {
  return { type: 'FETCH_ARTICLE_SUCCESS', payload: payload }
}

export function fetchArticleView (payload) {
  return { type: 'FETCH_ARTICLE_VIEW', articleId: payload }
}

export function fetchArticleViewSuccess (payload) {
  return { type: 'FETCH_ARTICLE_VIEW_SUCCESS', payload: payload }
}


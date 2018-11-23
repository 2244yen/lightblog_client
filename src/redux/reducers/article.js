const initialState = {
  articles: [],
  article: {}
}

export default function fetchArticle (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ARTICLE_SUCCESS':
      return { ...state, articles: action.payload }
    case 'FETCH_ARTICLE_FAIL':
      return state
    case 'FETCH_ARTICLE_VIEW_SUCCESS':
      return { ...state, article: action.payload }
    default:
      return state
  }
}
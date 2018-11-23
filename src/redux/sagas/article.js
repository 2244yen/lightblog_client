import { takeLatest, put } from 'redux-saga/effects'
import apiArticle from '../../services/article'
import * as articleAction from '../actions/articleAction'

export function* watchFetchArticlesSaga () {
  yield takeLatest('FETCH_ARTICLES', fetchArticlesSaga)
}

function* fetchArticlesSaga (action) {
  try {
    const response = yield apiArticle.getList(action.params)
    yield put (articleAction.fetchSuccessData(response.data))
  } catch (error) {
    yield put (articleAction.fetchFailData())
  } 
}

export function* watchFetchArticleViewSaga () {
  yield takeLatest('FETCH_ARTICLE_VIEW', fetchArticleViewSaga)
}

function* fetchArticleViewSaga (action) {
  try {
    const response = yield apiArticle.getDetail(action.articleId)
    yield put (articleAction.fetchArticleViewSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}
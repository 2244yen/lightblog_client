import { takeLatest, put } from 'redux-saga/effects'
import * as userAction from '../actions/userAction'
import apiUser from '../../services/user'

export function* watchSetUser () {
  yield takeLatest('SAVE_USER', saveUserSaga)
}

function* saveUserSaga (action) {
  try {
    const isExisted = apiUser.getUserByEmail(action.user.email)
    console.log('status', isExisted)
    if (isExisted.message === 'success') {
      isExisted.data.token = action.user.token
      yield sessionStorage.setItem('auth', JSON.stringify(isExisted.data))
      yield put(userAction.setUser(isExisted))
    } else {
      const data = {
        username: action.user.username,
        name: action.user.name,
        email: action.user.email,
        picture: action.user.provider_pic
      }
      const response = yield apiUser.saveUser(data)
      let user = response.data
      user.token = action.user.token
      yield sessionStorage.setItem('auth', JSON.stringify(user))
      yield put(userAction.setUser(user))
    }
    
  } catch (err) {
    console.log('status 1')
    console.log(err)
  }
}
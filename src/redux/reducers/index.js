import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux' 
import articleReducer from './article'
import userReducer from './user'
import commonReducer from './common'

export default combineReducers({
  articleReducer,
  userReducer,
  commonReducer,
  router: routerReducer
})
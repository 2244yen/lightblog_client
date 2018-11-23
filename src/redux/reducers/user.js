const initialState = {
  user: '',
  isAuth: false
}

export default function mangageUser (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state, 
        isAuth: Object.keys(action.user).length > 0 ? true : false,
        user: action.user
      }
    case 'SAVE_USER':
      return state
    case 'LOG_OUT':
      const newState = Object.assign({}, initialState)
      return newState
    default:
      return state
  }
}
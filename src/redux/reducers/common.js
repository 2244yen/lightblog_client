const initialState = {
  modalMode: false
}

export default function getCommon(state = initialState, action) {
  switch(action.type) {
    case 'TOGGLE_OPEN':
      const newState = Object.assign({}, state)
      newState.modalMode = true
      return newState
    case 'TOGGLE_CLOSE':
      const tempState = Object.assign({}, state)
      console.log(tempState)
      tempState.modalMode = false
      return tempState
    default:
      return state
  }
}
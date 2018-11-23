export function signInUser (data) {
  return { type: 'SAVE_USER', user: data }
}

export function setUser (data) {
  return { type: 'SET_USER', user: data }
}

export function logOut () {
  return { type: 'LOG_OUT' }
}
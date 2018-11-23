import api from './api'
const err = "Có lỗi trong quá trình xử lý. Vui lòng kiểm tra lại."

var getUser = (userId) => {
  return new Promise((resolve, reject) => {
    api.get('/users/' + userId).then(respone => {
      resolve(respone.data)
    }, respone => {
      reject(err)
    })
  })
}

var getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    api.get('/users/email/' + email).then(respone => {
      resolve(respone.data)
    }, respone => {
      reject(err)
    })
  })
}

var saveUser = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/users/create', data).then(response => {
      resolve(response.data)
    }, response => {
      reject(err)
    })
  })
}

export default {
  getUser,
  getUserByEmail,
  saveUser
}
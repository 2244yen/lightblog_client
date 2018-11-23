import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = config.API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

function getHeaders () {
  return {
    headers: {
    },
    emulateJSON: true
  }
}

export default {
  get (route) {
    return new Promise((response, reject) => {
      axios.get(route).then((res) => {
        response(res)
      }, (res) => {
        reject(res)
      })
    })
  },
  post (route, data) {
    return new Promise((response, reject) => {
      axios.post(route, data).then((res) => {
        response(res)
      }, (res) => {
        reject(res)
      })
    })
  },
  put (route, data = {}) {
    return new Promise((response, reject) => {
      axios.put(route, data).then((res) => {
        response(res)
      }, (res) => {
        reject(res)
      })
    })
  }
}
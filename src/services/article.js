import api from './api'
const err = "Có lỗi trong quá trình xử lý. Vui lòng kiểm tra lại."

var getList = (data) => {
  return new Promise((resolve, reject) => {
    let link = ''
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        link += prop + '=' + data[prop] + '&'
      }
    }
    if (link) {
      link = '/articles?' + link.substring(0, link.length - 1)
    } else {
      link = '/articles'
    }
    api.get(link).then(respone => {
      resolve(respone.data)
    }, respone => {
      reject(respone)
    })
  })
}

var createArticle = (data) => {
  api.post('/articles/create').then(respone => {
    resolve(respone.data)
  }, respone => {
    reject(respone)
  })
}

var getDetail = (id) => {
  return new Promise((resolve, reject) => {
    api.get('/articles/' + id).then(respone => {
      resolve(respone.data)
    }, respone => {
      reject(respone)
    })
  })
}

var getTags = () => {
  return new Promise((resolve, reject) => {
    api.get('/tags').then(respone => {
      resolve(respone.data)
    }, respone => {
      reject(respone)
    })
  })
}

var clap = (id) => {
  return new Promise((resolve, reject) => {
    api.put('/articles/' + id + '/clap').then(respone => {
      resolve(respone.data)
    }, respone => {
      reject(respone)
    })
  })
}

var getRelated = (id) => {
  return new Promise((resolve, reject) => {
    api.get('/articles/' + id + '/related').then(respone => {
      resolve(respone.data)
    }, respone => {
      reject(respone)
    })
  })
}

export default {
  getList,
  createArticle,
  getDetail,
  getTags,
  clap,
  getRelated
}
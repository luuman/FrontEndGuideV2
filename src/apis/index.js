import axios from 'axios'

const TOKEN = 'ada3673afe08d9e4ab688cdea86c127d84bf13ba'
// const option = {
//   headers: {
//     'Authorization': `token ${TOKEN}`
//   }
// }
// console.log('option' + option)

import qs from 'qs'
import * as Tool from 'UTIL/tool'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'
axios.defaults.headers.common['Authorization'] = `token ${TOKEN}`
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  let URL = config.url.split(config.baseURL)
  Tool.open(URL[1])
  return config
}, (error) => {
  Tool.toast('错误的传参', 'fail')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  console.log(res)
  // 拦截器配置
  // if (res.data.success) {
  //   Tool.toast(res.data.msg)
  //   Tool.close()
  //   return Promise.reject(res)
  // }
  Tool.close()
  return res
}, (error) => {
  Tool.toast('网络异常', 'fail')
  Tool.close()
  return Promise.reject(error)
})

export const oGet = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const oPost = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  ReposList (username) {
    return oGet(`/users/${username}/repos`)
  },
  Login (username, reponame) {
    return oGet(`/repos/${username}/${reponame}`)
  },
  UsersList (since) {
    return oGet(`/users?since=${since}`)
    // since The integer ID of the last User that you've seen.
  },
  Notifications (page) {
    return oGet(`/notifications?page=${page}`)
  },
  Notifs (page) {
    return oGet(`/repos/airyland/vux/notifications?page=${page}`)
  },
  Get (link) {
    return oGet(link)
  }
}

// import * as repos from './tempdata/repos'
// export const setpromise = data => {
//   return new Promise((resolve, reject) => {
//     resolve(data)
//   })
// }
// var Login = (username) => setpromise(repos.List)
// var ReposList = (username) => setpromise(repos.List)

// export default {
//   Login,
//   ReposList
// }

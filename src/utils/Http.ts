import Axios from 'axios'

// 请求拦截器
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers['Content-Type'] = 'multipart/form-data'
Axios.defaults.headers['Content-Type'] = 'application/json'
// axios.defaults.timeout = 15000;
Axios.interceptors.request.use(request => {
  // request.data = qs.stringify(request.data)
  return request
}, error => {
  Promise.reject(error)
})

// 响应拦截器
Axios.interceptors.response.use( response => {
  if(response.status === 200){
    let data:any = response.data
    return data
  }else {
    return Promise.reject(response.data || null)
  }
},  error => {
  return Promise.reject(error)
})

export default Axios;

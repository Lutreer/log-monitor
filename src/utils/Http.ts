import Axios from 'axios'
import CONST from '../assets/js/CONST'
import history from '../assets/js/handler/history'

// 请求拦截器
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers['Content-Type'] = 'multipart/form-data'
Axios.defaults.headers['Content-Type'] = 'application/json'
// axios.defaults.timeout = 15000;
Axios.interceptors.request.use(req => {
  // req.data = qs.stringify(req.data)
  req.headers[CONST.TOKEN] = localStorage.getItem(CONST.TOKEN)
  return req
}, error => {
  Promise.reject(error)
})

// 响应拦截器
Axios.interceptors.response.use( res => {
  if(res.status === 200){
    const headers = res.headers
    if(headers[CONST.TOKEN]){
      // 更新token
      localStorage.setItem(CONST.TOKEN,headers[CONST.TOKEN])
    }
    let data:any = res.data
    return data
  }else if(res.status === 401){
    history.push('/login')
  }else{
    return Promise.reject(res.data || null)
  }
},  error => {
  return Promise.reject(error)
})

export default Axios;

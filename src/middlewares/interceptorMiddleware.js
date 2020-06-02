import axios from 'axios'

const interceptorMiddlewre = (store) => (next) => (action) => {

  const accessToken = localStorage.getItem('token');
  axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    config.headers.Authorization = 'Bearer ' + accessToken
    console.log("config", config);
    return config
  }, function(error) {
    // Do something with request error
    return Promise.reject(error)
  })
  return next(action)
}

export default interceptorMiddlewre

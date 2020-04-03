import axios from '../../src/index'

axios.interceptors.request.use(config => {
    config.headers.test += '1'
    return config
})

axios({
    url: '/interceptor/get',
    method: 'get',
    headers: {
      test: ''
    }
  }).then((res) => {
    console.log(res.data)
  })
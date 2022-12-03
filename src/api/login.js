import axios from '@/util/request'

const getCode = async () => {
  return axios.get('/getCaptcha')
}

const forget = (option) => {
  return axios.post('/forget', {
    ...option
  })
}

export {
  getCode,
  forget
}

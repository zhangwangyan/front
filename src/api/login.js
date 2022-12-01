import axios from '@/util/axios'

const getCode = async () => {
  return axios.get('/getCaptcha')
}

const forget = async (option) => {
  let result = ''
  try {
    result = await axios.post('/forget', { ...option })
  } catch (e) {
    console.log(e)
  }
  return result
}

export {
  getCode,
  forget
}

import axios from 'axios'

const getCode = async () => {
  let result = ''
  try {
    result = await axios.get('/getCaptcha')
  } catch (e) {
    console.log(e)
  }
  return result
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

import HttpRequest from '@/util/axios'
import config from '@/config'
const baseUrl = process.env.NODE_env === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)

export default axios

import Axios from 'axios'

const newAxios = Axios.create({
    baseURL: 'https://virtserver.swaggerhub.com'
})

export default newAxios
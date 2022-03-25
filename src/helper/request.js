import axios from 'axios';

const getData = async () => {
    const response = await axios({
        baseURL: 'https://virtserver.swaggerhub.com',
        method: 'GET',
        url: '/hanabyan/todo/1.0.0/to-do-list',
    })
    return response.data
}

export { getData }

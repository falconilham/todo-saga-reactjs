import axios from 'helper/axios';

const requestGetData = async () => {
    const response = await axios({
        method: 'GET',
        url: '/hanabyan/todo/1.0.0/to-do-list',
    })
    return response
}

export { requestGetData }

import axios from 'axios';

const httpService = axios.create({
    baseURL: 'http://192.168.8.101:8000/api'
})

httpService.interceptors.request.use(config => {
    return Promise.resolve(config)
})

httpService.interceptors.response.use(
    (response) => {
        return response;
    },

    error => {
        return Promise.reject(error.response);
    }
)

export default httpService;
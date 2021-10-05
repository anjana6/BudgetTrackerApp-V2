import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const httpService = axios.create({
    baseURL: 'http://192.168.8.101:8000/api'
})

httpService.interceptors.request.use(async config => {

    config.headers = {
        authorization: await SecureStore.getItemAsync('token'),
      };
      console.log(config)
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
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { getToken } from './storageService';

const httpService = axios.create({
    baseURL: 'https://budgety-track-app.herokuapp.com/api'
})

httpService.interceptors.request.use(async config => {
    config.headers = {
        authorization: await getToken(),
      };

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
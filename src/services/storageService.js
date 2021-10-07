import * as SecureStore from 'expo-secure-store';

export const setToken =async (token) => {
   return await SecureStore.setItemAsync('token', token)
}

export const getToken = async () => {
   return await SecureStore.getItemAsync('token')
}
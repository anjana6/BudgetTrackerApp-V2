import httpService from "./HttpService";

class UserService{

    regiserUser(payload){
        return httpService.post('/user/',payload)
    }

    loginUser(payload){
        return httpService.post('/user/login',payload);
    }
}

export default new UserService();
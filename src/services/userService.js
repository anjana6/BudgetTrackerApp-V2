import httpService from "./HttpService";

class UserService{

    regiserUser(payload){
        return httpService.post('/user/',payload)
    }
}

export default new UserService();
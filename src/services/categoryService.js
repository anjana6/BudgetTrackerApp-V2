import httpService from "./HttpService";

class CategoryService{

    addCategory(payload){
       return httpService.post('/category/',payload)
    }

    fetchCategory(categoryType){
        return httpService.get(`/category/${categoryType}`)
    }

    deleteItem(itemId){
        return httpService.delete(`/category/${itemId}`)
    }

    updateCategory(itemId,payload){
        return httpService.put(`/category/${itemId}`,payload)
    }

}

export default new CategoryService();
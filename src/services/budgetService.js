import httpService from "./HttpService";

class BudgetService{
    fetchMonthlyBudget(){
        return httpService.get('/budget/month')
    }

    addBudget(payload){
        return httpService.post('/budget/',payload);
    }

    updateBudget(itemId,payload){
        return httpService.put(`/budget/item/${itemId}`,payload);
    }

    fetchBudgetItem(budgetState){
        const {selectedDate,selectedCategory} = budgetState;
        return httpService.get(`/budget/items/${selectedCategory.budgetType}/${selectedCategory.category}?startDate=${selectedDate.startDate}&&endDate=${selectedDate.endDate}`)
    }

    fetchItemDetails(itemId){
        return httpService.get(`/budget/item/${itemId}`)
    }

    deleteItem(itemId){
        return httpService.delete(`/budget/item/${itemId}`)
    }

    fetchBugetByDate(budgetState){
        const {selectedDate} = budgetState;
        return httpService.get(`/budget/category?startDate=${selectedDate.startDate}&&endDate=${selectedDate.endDate}`)
    }
}

export default new BudgetService();
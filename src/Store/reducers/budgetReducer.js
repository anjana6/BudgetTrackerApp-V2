import { SELECT_DATE,SELECT_CATEGORY } from "./type";

const budgetReducer = (state,action) => {
    const {type,payload} = action;

    switch(type){
        case SELECT_DATE:
            return {...state,selectedDate:{startDate:payload.startDate,endDate:payload.endDate}};
        case SELECT_CATEGORY:
            return {...state,selectedCategory: payload}
        default:
            return state;
    }
}

export default budgetReducer;
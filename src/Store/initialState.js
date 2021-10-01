import moment from "moment"
export const budgetInitialState = {
    selectedDate:{
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    },
    seletctedCategory: {}
}
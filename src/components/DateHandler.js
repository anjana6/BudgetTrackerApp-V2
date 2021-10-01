import React,{useState,useContext} from 'react'
import {Text,View,Button} from 'react-native';
import { GloableContext } from '../Store';
import DateRangePicker from "react-native-daterange-picker";
import moment from 'moment';
import { SELECT_DATE } from '../Store/reducers/type';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DateHandler = () => {

    const {budgetDispatch,budgetState} = useContext(GloableContext);
    const [displayedDate,setDisplayDate] = useState(moment());
    const [openDate,setOpenDate] = useState(false);
    const [state, setstate] = useState(moment())

    const setDates = (dates) => {
        console.log(dates);
        const {startDate,endDate,displayedDate} = dates;
        if(dates && startDate){
            budgetDispatch({
                type: SELECT_DATE,
                payload: {startDate:startDate,endDate:startDate}
            })
        }
        if(dates && endDate){
            budgetDispatch({
                type: SELECT_DATE,
                payload: {startDate:budgetState?.selectedDate?.startDate,endDate:endDate}
            })
        }
        if(dates && displayedDate){
            setDisplayDate(displayedDate)
        }
      };
    return (
        <> 
        
            <DateRangePicker
        onChange={setDates}
        endDate={budgetState?.selectedDate?.endDate}
        startDate={budgetState?.selectedDate?.startDate}
        displayedDate={displayedDate}
        // open = {openDate}
        range
>
  <Text >
                    <Icon 
                    name='calendar-alt' 
                    size={20}
                    color="green"
                    /></Text>
</DateRangePicker>  
</>


    )
}

export default DateHandler

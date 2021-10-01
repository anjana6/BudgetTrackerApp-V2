import React, { useState,useContext } from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {Card,Text} from 'react-native-elements';
import {View,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import BudgetViewCardItem from '../components/BudgetViewCardItem';
import moment from 'moment';
import DateRangePicker from "react-native-daterange-picker";
import DateHandler from '../components/DateHandler';
import {GloableContext} from '../Store';
import { SELECT_CATEGORY } from '../Store/reducers/type';
import {PieChart} from 'react-native-svg-charts';
import BudgetCategories from '../components/BudgetCategories';


const BudgetViewScreen = ({route,navigation}) => {
    const [startDate,setStartDate] = useState(moment().startOf('month'));
    const [endDate,setEndDate] = useState(moment().endOf('month'));
    const [displayedDate,setDisplayDate] = useState(moment());
   const [openDate,setOpenDate] = useState(false);

    const {budget} = route.params;
    const {budgetDispatch,budgetState} = useContext(GloableContext);

    // const setDates = (dates) => {
    //     // console.log(dates)
    //     const {startDate,endDate,displayedDate} = dates;
    //     if(dates && startDate){
    //         setStartDate(startDate);
    //         setEndDate(null)
    //     }
    //     if(dates && endDate){
    //         setEndDate(endDate)
    //     }
    //     if(dates && displayedDate){
    //         setDisplayDate(displayedDate)
    //     }
    //   };
    const onNext = () => {
        navigation.navigate('BudgetCategoryItem');
        budgetDispatch({
            type:  SELECT_CATEGORY,
            payload: {budgetType: 'expense',category: 'food'}
        })
    }

    const data = [{total:50, fill: '#600080'},{total:50, fill: '#9900cc' }];

    // const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    // console.log(randomColor());

        const pieData = data
            .filter((value) => value.total > 0)
            .map((value, index) => ({
                value: value.total,
                svg: {
                    fill: value.fill,
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
    
    return (
        <HomeLayout title="Budget" navigation={navigation}>
           
            <DateHandler/>
            
            {/* <DateRangePicker
                onChange={setDates}
                endDate={endDate}
                startDate={startDate}
                displayedDate={displayedDate}
                // open = {openDate}
                range
        >
          <Text onPress={() => setOpenDate(true)}>Click me!</Text>
        </DateRangePicker>  */}
            {/* <ScrollView>  */}
           {/* <>
                <Card>
                <Card.Title>Balance:5000</Card.Title>
                <Card.Divider/>
                 <PieChart style={{ height: 150 }} data={pieData}/>
                <View style={styles.expense_income}>
                <Text h5>Income:50,000</Text>
                <Text h5>Expnese:50,000</Text>
                </View>
                
                </Card>
                </> */}
                <View>
                    <Text h4 style={styles.currency}>Balance:5000</Text>
                    <Card.Divider/>
                    <PieChart style={{ height: 150 }} data={pieData}/>
                    <View style={styles.expense_income}>
                    <Text h5>Income:50,000</Text>
                    <Text h5>Expnese:50,000</Text>
                    </View>
                </View>
            
            
            {/* <Text>Income</Text>
            <TouchableOpacity onPress={onNext}>
                <BudgetViewCardItem/>
            </TouchableOpacity>

            <Text>Expense</Text>
            <TouchableOpacity onPress={onNext}>
                <BudgetViewCardItem/>
            </TouchableOpacity> */}
            <BudgetCategories navigation={navigation}/>
           
               {/* </ScrollView>   */}
        </HomeLayout>
    )
}

export default BudgetViewScreen;

const styles = StyleSheet.create({
    currency: {
        textAlign: 'center'
    },
    expense_income: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal:10
    }
})

import React, { useState,useContext, useEffect } from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {Card,Text} from 'react-native-elements';
import {View,StyleSheet} from 'react-native';
import moment from 'moment';
import DateHandler from '../components/DateHandler';
import {GloableContext} from '../Store';
import { SELECT_CATEGORY } from '../Store/reducers/type';
import {PieChart} from 'react-native-svg-charts';
import BudgetCategories from '../components/BudgetCategories';
import budgetService from '../services/budgetService';


const BudgetViewScreen = ({navigation}) => {
   const [budgetTotal,setBudgetTotal] = useState(null);
    const {budgetDispatch,budgetState} = useContext(GloableContext);

    useEffect(() => {
       getData()
    }, [])

    const getData = async () => {
        try {
            const res = await budgetService.fetchBudgetTotal(budgetState)
            setBudgetTotal(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const data = [{total: budgetTotal?.income, fill: '#4AE215'},{total: budgetTotal?.expense, fill: '#15AAE2' }];

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
                <View>
                    <Text h4 style={styles.currency}>Balance:{budgetTotal?.income - budgetTotal?.expense}</Text>
                    <Card.Divider/>
                    <PieChart style={{ height: 150 }} data={pieData}/>
                    <View style={styles.expense_income}>
                    <Text h5>Income:{budgetTotal?.income}</Text>
                    <Text h5>Expnese:{budgetTotal?.expense}</Text>
                    </View>
                </View>
            <BudgetCategories navigation={navigation}/>
        </HomeLayout>
    )
}

export default BudgetViewScreen;

const styles = StyleSheet.create({
    currency: {
        textAlign: 'center'
    },
    expense_income: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal:10
    }
})

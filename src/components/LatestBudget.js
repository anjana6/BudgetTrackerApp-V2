import React,{useEffect, useState} from 'react';
import {Text,Avatar} from 'react-native-elements';
import { View,StyleSheet } from 'react-native';
import budgetService from '../services/budgetService';
import moment from 'moment';
import { color } from 'react-native-elements/dist/helpers';
import { selectColor } from '../helpers/commenHelper';

const LatestBudget = () => {
    const [budgets,setBudgets]= useState([]);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const res = await budgetService.fetchLatestBudget();
            console.log(res.data.data)
            setBudgets(res.data.data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {/* <Text style={styles.date}>10/18/2021</Text> */}
            {budgets?.map(budget => {
                return (
                    <View key={budget.id}>
                    <View style={styles.card}>
           
                    <View style={styles.categoryName}>
                        <Avatar
                        size="medium"
                        rounded
                        title={budget.category.charAt(0) }
                        containerStyle={{backgroundColor:selectColor(budget.budget_type),marginRight: 2}}
                        />
                        <Text h5>{budget.category} - {budget.title}</Text>
                    </View>
                    <View>
                        <Text h4>{budget.budget_type == "income" ? budget.amount: - budget.amount}</Text>
                    </View>    
                </View>
                <Text style={styles.date}>{moment(budget.date).format('YYYY-MM-DD')}</Text>
                </View>
                )
            })}
            
        </>
    )
}

export default LatestBudget;


const styles = StyleSheet.create({
    card: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        // padding: 5,
        // marginVertical: 5,
        marginHorizontal: 5,
        // borderWidth: 1,
        // borderRadius: 5
    },
    categoryName: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    date:{
        textAlign: 'right',
        color:'gray',
        marginHorizontal: 5
        
    }
})
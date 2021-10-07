import React,{useContext,useEffect,useState} from 'react';
import { TouchableOpacity,Text,ScrollView,StyleSheet  } from 'react-native';
import budgetService from '../services/budgetService';
import { GloableContext } from '../Store';
import { SELECT_CATEGORY } from '../Store/reducers/type';
import BudgetViewCardItem from './BudgetViewCardItem';

const BudgetCategories = ({navigation}) => {
    const {budgetDispatch,budgetState} = useContext(GloableContext);
    const [category,setCategory] = useState(null)
    useEffect(() => {
       getData()
    }, []);

    const getData = async () => {
        try {
            const res = await budgetService.fetchBugetByDate(budgetState);
            setCategory(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const onNext = (budgetType,category) => {
        navigation.navigate('BudgetCategoryItem');
        budgetDispatch({
            type:  SELECT_CATEGORY,
            payload: {budgetType: budgetType,category: category}
        })
    }
    return (
        <>
        <ScrollView> 
        <Text style={styles.budgeType}>Income</Text>
        {category?.income.map((category,index) => {
            return(
                <TouchableOpacity key={index} onPress={() =>{onNext('income',category?.category)}}>
            <BudgetViewCardItem name={category?.category} budgetType="income"/>
            </TouchableOpacity>
            )
        })}

            <Text style={styles.budgeType}>Expense</Text>
            {category?.expense?.map((category,index) => {
            return(
                <TouchableOpacity key={index} onPress={() =>{onNext('expense',category?.category)}}>
            <BudgetViewCardItem name={category?.category} budgetType="expense"/>
            </TouchableOpacity>
            )
        })}
            </ScrollView> 
        </>
    )
}

export default BudgetCategories;

const styles = StyleSheet.create({
    budgeType: {
        marginHorizontal:10,
    }
})

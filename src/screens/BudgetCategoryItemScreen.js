import React,{useContext, useEffect,useState} from 'react'
import BudgetCategoryItemCard from '../components/BudgetCategoryItemCard'
import HomeLayout from '../Layouts/HomeLayout';
import { ScrollView,TouchableOpacity,View,StyleSheet } from 'react-native';
import {Text,Card} from 'react-native-elements';
import budgetService from '../services/budgetService';
import { GloableContext } from '../Store';

const BudgetCategoryItemScreen = ({navigation}) => {
    const [budgetItem,setBudgetItem] = useState([]);
    const [total,setTotal] = useState('');
    const {budgetState} = useContext(GloableContext)

    useEffect(() => {
        getDate()
    }, [])

    const getDate = async () =>{
        try {
            const res = await budgetService.fetchBudgetItem(budgetState);
            setBudgetItem(res.data.data.items);
            setTotal(res.data.data.total);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <HomeLayout navigation={navigation} title="Budget Item">
             <ScrollView>  
        <View>
            <Card>
                <Text h4 style={styles.cardTitle}>{budgetState?.selectedCategory?.category?.toUpperCase()}</Text>
                <View style={styles.cardContainer}>
                <Text>Total</Text>
                <Text h2>{total}</Text>
                </View>
                <Text style={styles.cardBottom}>{budgetState?.selectedCategory?.budgetType}</Text>
            </Card>
        </View>
        {
            budgetItem.map((item) => {
                return(
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('BudgetCategoryDetails',{itemId: item.id})}>
                        <BudgetCategoryItemCard
                            date = {item.date}
                            title = {item.title}
                            amount = {item.amount}
                            budgetType={item.budget_type}
                        />
                    </TouchableOpacity>
                )
            })
        }
        
           </ScrollView> 
        </HomeLayout>
    )
}

export default BudgetCategoryItemScreen;

const styles = StyleSheet.create({
    cardTitle:{
        textAlign: 'left'
    },
    cardContainer: {
        alignItems: 'center'
    },
    cardBottom: {
        textAlign: 'right'
    }
})

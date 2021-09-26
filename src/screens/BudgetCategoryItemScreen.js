import React from 'react'
import BudgetCategoryItemCard from '../components/BudgetCategoryItemCard'
import HomeLayout from '../Layouts/HomeLayout';
import { ScrollView,TouchableOpacity,View } from 'react-native';
import {Text,Card} from 'react-native-elements';

const BudgetCategoryItemScreen = ({navigation}) => {
    return (
        <HomeLayout>
             <ScrollView>  
        <View>
            <Card>
            <Text h4>Food</Text>
            <View>
            <Text>Total</Text>
            <Text h2>50,000</Text>
            </View>
            <Text>Income</Text>
            </Card>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('BudgetCategoryDetails')}>
            <BudgetCategoryItemCard/>
        </TouchableOpacity>
           </ScrollView> 
        </HomeLayout>
    )
}

export default BudgetCategoryItemScreen;

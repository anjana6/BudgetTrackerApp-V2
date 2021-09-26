import React from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {Card,Text} from 'react-native-elements';
import {View,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import BudgetViewCardItem from '../components/BudgetViewCardItem';


const BudgetViewScreen = ({route,navigation}) => {
    const {budget} = route.params;
    
    return (
        <HomeLayout title="Budget" navigation={navigation}>
            <ScrollView>  
            <View>
                <Card>
                <Card.Title>{budget}</Card.Title>
                <Card.Divider/>
                <Card.Image 
                source={budget=='Expense'? require('../images/expense.jpg'): require('../images/income.jpg')}>
                </Card.Image>
                <Text h2 style={styles.currency}>50,000</Text>
                </Card>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('BudgetCategoryItem')}>
                <BudgetViewCardItem/>
            </TouchableOpacity>
                {/* <Divider orientation="horizontal"  color="red" /> */}

               </ScrollView>  
        </HomeLayout>
    )
}

export default BudgetViewScreen;

const styles = StyleSheet.create({
    currency: {
        textAlign: 'center'
    }
})

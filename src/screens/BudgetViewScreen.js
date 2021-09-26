import React from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {Card,Text} from 'react-native-elements';
import {View,TouchableOpacity,ScrollView} from 'react-native';
import BudgetViewCardItem from '../components/BudgetViewCardItem';


const BudgetViewScreen = ({navigation}) => {
    return (
        <HomeLayout title="Budget" navigation={navigation}>
            <ScrollView>  
            <View>
                <Card>
                <Card.Title>Expense</Card.Title>
                <Card.Divider/>
                <Card.Image source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}>
                {/* <Image
                source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
                style={{ width: 100, height: 100 }}
                /> */}
                
                </Card.Image>
                <Text h2>50,000</Text>
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

export default BudgetViewScreen

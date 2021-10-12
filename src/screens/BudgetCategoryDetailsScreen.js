import React,{useEffect,useState} from 'react'
import DetailsItemRow from '../components/DetailsItemRow';
import { StyleSheet, View } from 'react-native';
import {Card,Button} from 'react-native-elements';
import HomeLayout from '../Layouts/HomeLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import budgetService from '../services/budgetService';

const BudgetCategoryDetailsScreen = ({route,navigation}) => {
    const {itemId} = route.params;
    const [item,setItem] = useState(null);
    useEffect(() => {
        getData()
    }, []);

    const getData = async () =>{
        try {
            const res = await budgetService.fetchItemDetails(itemId);
            setItem(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteItem = async () => {
        try {
            const res = await budgetService.deleteItem(itemId);
            if(res?.data?.success){
                navigation.replace('BudgetCategoryItem')
              }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <HomeLayout title="Details" navigation={navigation}>
        <View>
            <Card >
            <DetailsItemRow title={item?.budget_type} value={item?.amount}/>

            <DetailsItemRow title="Category" value={item?.category}/>

            <DetailsItemRow title="Title" value={item?.title}/>

            <DetailsItemRow title="Date" value="2021/10/18"/>
            </Card>
            </View>
            <View style={styles.buttons}>
            <Button
                icon={
                    <Icon
                    name="edit"
                    size={20}
                    color="white"
                    />
                }
                title="EDIT"
                onPress = {() => navigation.navigate('BudgetAddingScreen',{item})}
                />

            <Button
                icon={
                    <Icon
                    name="trash-o"
                    size={20}
                    color="white"
                    />
                }
                title="DELETE"
                onPress = {() => deleteItem()}
                />
            </View>
        
        </HomeLayout>
    )
}

export default BudgetCategoryDetailsScreen;

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-around'
    }
})

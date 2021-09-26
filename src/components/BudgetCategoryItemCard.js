import React from 'react';
import {Text,Avatar} from 'react-native-elements';
import { View,StyleSheet } from 'react-native';

const BudgetCategoryItemCard = () => {
    return (
        <View>
            <Text>10/18/2021</Text>
            <View style={styles.card}>
           
            <View style={styles.categoryName}>
                <Avatar
                size="medium"
                rounded
                title="BP"
                containerStyle={{backgroundColor:"#00ff7f",marginRight: 2}}
                />
                <Text h5>Lunch</Text>
            </View>
            <View>
                <Text h4>5,000</Text>
            </View>    
        </View>
        </View>
    )
}

export default BudgetCategoryItemCard


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 5,
        marginVertical: 20,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    categoryName: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
import React from 'react';
import {Text,Avatar} from 'react-native-elements';
import { View,StyleSheet } from 'react-native';
import { selectColor } from '../helpers/commenHelper';

const BudgetCategoryItemCard = ({date,title,amount,budgetType}) => {
    return (
        <View>
            <Text style={styles.date}>10/18/2021</Text>
            <View style={styles.card}>
           
            <View style={styles.categoryName}>
                <Avatar
                size="medium"
                rounded
                title={title.charAt(0)}
                containerStyle={{backgroundColor:selectColor(budgetType),marginRight: 2}}
                />
                <Text h5>{title}</Text>
            </View>
            <View>
                <Text h4>{amount}</Text>
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
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    categoryName: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    date:{
        backgroundColor: 'gray',
        margin:5,
        borderRadius:5,
        paddingHorizontal:10
    }
})
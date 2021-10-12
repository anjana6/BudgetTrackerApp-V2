import React from 'react';
import {Text,Avatar,Badge,Card} from 'react-native-elements';
import {View,StyleSheet} from 'react-native';
import { selectColor } from '../helpers/commenHelper';

const BudgetViewCardItem = ({name,budgetType}) => {
    return (
            <>
         <View style={styles.card}>
            <View style={styles.categoryName}>
                <Avatar
                    size="medium"
                    rounded
                    title={name.charAt(0)}
                    containerStyle={{backgroundColor:selectColor(budgetType),marginRight: 2}}
                    
                />
                <Text h4>{name}</Text>
            </View>
            <View>
                <Text >View</Text>
            </View>    
        </View>
        </>
        
    )
}

export default BudgetViewCardItem;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 5,
        marginVertical: 10,
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

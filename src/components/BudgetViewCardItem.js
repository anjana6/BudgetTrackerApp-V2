import React from 'react';
import {Text,Avatar,Badge,Card} from 'react-native-elements';
import {View,StyleSheet} from 'react-native';

const BudgetViewCardItem = ({name}) => {
    return (
            <>
        {/* <View style={tailwind('flex-row justify-between items-center border-2 border-gray-500 border-opacity-25 p-1 my-1' )}>
            <View style={tailwind('flex flex-row items-center')}>
                <Avatar
                size="medium"
                rounded
                title="BP"
                containerStyle={{backgroundColor:"#36BF59",marginRight: 2}}
                
                />
                <Text h4>Food</Text>
                <Badge value="2" status="primary" />
            </View>
            <View>
                <Text h4>5,000</Text>
            </View>    
        </View> */}
         <View style={styles.card}>
            <View style={styles.categoryName}>
                <Avatar
                size="medium"
                rounded
                title="BP"
                containerStyle={{backgroundColor:"#36BF59",marginRight: 2}}
                
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

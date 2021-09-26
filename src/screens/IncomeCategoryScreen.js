import React from 'react';
import {View,StyleSheet} from 'react-native';
import { Avatar,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const IncomeCategoryScreen = () => {
    return (
        <View style={styles.card}>
        <View style={styles.categoryName}>
            <Avatar
            size="medium"
            rounded
            title="BP"
            containerStyle={{backgroundColor:"#36BF59",marginRight: 2}}
            />
            <Text h4>Food</Text>
        </View>
        <View style={styles.categoryButton}>
        <Icon
            name="edit"
            size={20}
            color="black"
            />
            <Icon
            name="trash-o"
            size={20}
            color="black"
            />
        </View>    
    </View>
    )
}

export default IncomeCategoryScreen;

const styles = StyleSheet.create({
    card: {
        // flex: 1,
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
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

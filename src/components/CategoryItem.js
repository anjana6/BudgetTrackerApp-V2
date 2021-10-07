import React,{useEffect, useState} from 'react';
import {View,StyleSheet,Button} from 'react-native';
import { Avatar,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { selectColor } from '../helpers/commenHelper';
import categoryService from '../services/categoryService';
import CategoryModal from './CategoryModal';

const CategoryItem = ({name,id,categoryType,onUpdate,reloadHandler}) => {
    const deleteItem = async () => {
        try {
            const res = await categoryService.deleteItem(id);
            if(res.data.success){
                reloadHandler()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <View style={styles.card}>
        <View style={styles.categoryName}>
            <Avatar
            size="small"
            rounded
            title={name.charAt(0) }
            containerStyle={{backgroundColor:selectColor(categoryType),marginRight: 2}}
            />
            <Text h5>{name}</Text>
        </View>
        <View style={styles.categoryButton}>
        <Icon
            name="edit"
            size={20}
            color="black"
            onPress={() => onUpdate()}
            style={styles.buttonIcon}
            />
            <Icon
            name="trash-o"
            size={20}
            color="black"
            onPress={() => deleteItem()}
            />
        </View>    
        
    </View>

    </>
    )
}

export default CategoryItem;

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        // borderWidth: 1,
        // borderRadius: 5
    },
    categoryName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonIcon:{
        marginHorizontal: 10
    }
})


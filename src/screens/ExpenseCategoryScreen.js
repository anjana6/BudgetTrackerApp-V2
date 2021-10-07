import React,{useEffect, useState} from 'react';
import {View,StyleSheet,Button} from 'react-native';
import { Avatar,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryModal from '../components/CategoryModal';
import CategoryItem from '../components/CategoryItem';
import categoryService from '../services/categoryService';

const ExpenseCategoryScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [categories,setCategories] = useState([]);
    const [categoryId,setCategoryId] = useState(null);
    const [categoryName,setCategoryName] = useState(null);

    useEffect(() => {
        getData()
    }, []);

    const getData =async () => {
        try {
           const res = await categoryService.fetchCategory('expense');
           setCategories(res.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const onUpdate = (category) => {
        setModalVisible(true)
        setCategoryId(category.id);
        setCategoryName(category.name);
    }
    return (
        <>
        {
            categories?.map(category => {
                return(
                    <CategoryItem 
                        key={category.id} 
                        name={category.name} 
                        id={category.id} 
                        categoryType={category.category_type}
                        onUpdate={() => onUpdate(category)}
                        reloadHandler={getData}
                    />
                )
            })
        }
        
    <CategoryModal 
        modalVisible={modalVisible} 
        onClose={() => setModalVisible(false)}
        categoryType='expense'
        categoryName={categoryName}
        categoryId={categoryId}
        reloadHandler={getData}
        />
    <Button
        icon={<Icon name='plus' color='#ffffff' />}
        title='ADD' 
        onPress={() => setModalVisible(true)}
    />
</>
    )
}

export default ExpenseCategoryScreen;


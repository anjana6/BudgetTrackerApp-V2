import React from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IncomeCategoryScreen from './IncomeCategoryScreen';
import ExpenseCategoryScreen from './ExpenseCategoryScreen';

const Tab = createMaterialTopTabNavigator();

const CategorySetttingScreen = ({navigation}) => {
    return (
        <HomeLayout title="CategorySetting" navigation={navigation}>
            <Tab.Navigator>
            <Tab.Screen name="Income" component={IncomeCategoryScreen}/>
            <Tab.Screen name="Expense" component={ExpenseCategoryScreen}/>
            </Tab.Navigator>
        </HomeLayout>
    )
}

export default CategorySetttingScreen;

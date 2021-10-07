import React, { useEffect, useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Input,Button,Text} from 'react-native-elements';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import budgetService from '../services/budgetService';
import categoryService from '../services/categoryService';


const BudgetAddingScreens = ({route,navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [budgetType,setBudgetType] = useState(null);
  const [category,setCategory] = useState(null);
  const [title,setTitle] = useState(null);
  const [amount,setAmount] = useState(null);
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    if(route.params){
      const {item} = route.params;
      setBudgetType(item.budget_type);
      setCategory(item.category);
      setDate(new Date(item.date))
      setTitle(item.title);
      setAmount(item.amount);
    }
  }, [])

  const getCategories = async (categoryType) => {
    try {
      const res = await categoryService.fetchCategory(categoryType);
      setCategories(res.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async () => {
    const payload = {
      budget_type: budgetType,
      category: category,
      date: date,
      title: title,
      amount: amount
    }
    try {
      if(route.params){
        const res = await budgetService.updateBudget(route?.params?.item?.id,payload);
        if(res.data.success){
          navigation.replace('BudgetCategoryItem')
        }
      }else{
        const res = await budgetService.addBudget(payload);
       if(res.data.success){
         navigation.replace('MainHome')
       }
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onBudgetTypeHandler = (budgetType) => {
    setBudgetType(budgetType);
    getCategories(budgetType)
  }

    return (
        <HomeLayout title="New Budget" navigation={navigation}>
            <View style={styles.container}>
            <Picker
              selectedValue={budgetType}
              style={{ height: 50}}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => onBudgetTypeHandler(itemValue)}
            >
              <Picker.Item label="Income" value="income" />
              <Picker.Item label="Expense" value="expense" />
            </Picker>
            <Picker
              selectedValue={category}
              style={{ height: 50}}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            >
              {categories.map(cat => {
                return (
                  <Picker.Item key={cat.id} label={cat.name} value={cat.name} />
                )
              })}
              
            </Picker>
            <View style={styles.date_time}>
              <Text onPress={() => showDatepicker() }>Date</Text>
              <Text onPress={() => showTimepicker() }>Time</Text>
            </View>
            <Input
                value={title}
                placeholder='Title'
                onChangeText={value => setTitle(value)}
            />
            <Input
                value={amount}
                placeholder='Amount'
                onChangeText={value => setAmount(value)}
            />

            <Button
              title={route.params? "UPDATE": "ADD"}
              onPress={() => onSubmit()}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            </View>
        </HomeLayout>
    )
}

export default BudgetAddingScreens;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 10,
        margin:10
    },
    date_time: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20
  }
})

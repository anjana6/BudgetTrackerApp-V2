import React from 'react';
import {View,Text} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const MainHeader = ({title,navigation}) => {
    return (
        <Header
        leftComponent={
        title !== "Home" ?<Icon name="long-arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>: ""}
        centerComponent={{ text: `${title}`, style: { color: '#fff', fontSize: 20 } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
}

export default MainHeader;

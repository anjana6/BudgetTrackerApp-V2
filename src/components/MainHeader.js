import React from 'react';
import {View,Text} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons'; 
import * as SecureStore from 'expo-secure-store';

const MainHeader = ({title,navigation}) => {

  const logout = () => {
    SecureStore.deleteItemAsync('token');
    navigation.navigate('Login')
  }
    return (
        <Header
        leftComponent={
        title !== "Home" ?<Icon name="long-arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>: ""}
        centerComponent={{ text: `${title}`, style: { color: '#fff', fontSize: 20 } }}
        rightComponent={<MIcon name="logout" size={30} color="white" onPress={() =>logout()}/>}
      />
    )
}

export default MainHeader;

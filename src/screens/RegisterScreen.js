import React, { useState } from 'react'
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import AuthLayout from '../Layouts/AuthLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import userService from '../services/userService';

const RegisterScreen = ({navigation}) => {
  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);

  const onSubmit = async () => {
    try {
      const payload = {
        name,
        email,
        password
      }
      const res = await userService.regiserUser(payload);
      console.log(res.data.data);
      if(res.data.success){
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <View style={styles.container}>
            <AuthLayout>
            <Text h3>Create Account</Text>
                <Input
                value={name}
                placeholder='UserName'
                onChangeText={value => setName(value)}
                leftIcon={
                    <Icon
                      name='user'
                      size={24}
                      color='black'
                    />
                  }
                />
                <Input
                value={email}
                placeholder='Email'
                onChangeText={value => setEmail(value)}
                leftIcon={
                    <MIcon
                      name='email'
                      size={24}
                      color='black'
                    />
                  }
                />
                <Input
                value={password}
                placeholder='Password'
                onChangeText={value => setPassword(value)}
                leftIcon={
                    <Icon
                      name='lock'
                      size={24}
                      color='black'
                    />
                  }
                  secureTextEntry={true}
                />

                <Button
                title="Create Account"
                onPress={() => onSubmit()}
                />
                <View>
                <Text>Already have an account</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                </View>
            </AuthLayout>

        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20
    },
    text: {
      textAlign: 'center',
      color: 'blue'
    }
  });

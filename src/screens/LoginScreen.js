import React, { useState } from 'react';
import { View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthLayout from '../Layouts/AuthLayout';
import userService from '../services/userService';
import * as SecureStore from 'expo-secure-store';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const onSubmit = async () => {
        try {
          const payload = {
            email,
            password
          }
          const res = await userService.loginUser(payload);
          
          if(res.data.success){
            console.log(res.data.data);
            await SecureStore.setItemAsync('token', res.data.data)
            navigation.navigate('MainHome');
          }
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <View style={styles.container}>
            <AuthLayout>
                <Input
                    placeholder='Email'
                    onChangeText={value => setEmail(value)}
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                        }
                />
                <Input
                placeholder='Password'
                onChangeText={value => setPassword(value)}
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    />
                }
                secureTextEntry={true}
                />
                <Button
                    title="Login"
                    onPress={() => onSubmit()}
                    // onPress={() => navigation.navigate('MainHome')}
                    />
        <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Create Account</Text>
        </TouchableOpacity>
        </View>
            </AuthLayout>
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  
});

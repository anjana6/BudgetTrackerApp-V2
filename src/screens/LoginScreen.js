import React, { useState } from 'react';
import { View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthLayout from '../Layouts/AuthLayout';
import userService from '../services/userService';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { setToken } from '../services/storageService';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState('');

    const onSubmit = async () => {
        try {
          const payload = {
            email,
            password
          }
          const res = await userService.loginUser(payload);
          
          if(res.data.success){
            setToken(res.data.data);
            setEmail(null);
            setPassword(null);
            setError('')
            navigation.navigate('MainHome');
          }
        } catch (error) {
          setError(error.data.message);
        }
      }
    return (
        <View style={styles.container}>
            <AuthLayout>
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
                <Text style={styles.error}>{error}</Text>
                <View style={styles.button}>
                <Button
                    title="Login"
                    onPress={() => onSubmit()}
                    />
                    </View>
        <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text}>Create Account</Text>
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
  text: {
    textAlign: 'center',
    color: '#16087A'
  },
  button: {
    width: 150,
    marginVertical:5
  },
  error:{
    color: 'red'
  }
  
});

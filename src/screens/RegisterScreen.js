import React from 'react'
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import AuthLayout from '../Layouts/AuthLayout';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <AuthLayout>
            <Text h3>Create Account</Text>
                <Input
        placeholder='UserName'
        leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
        placeholder='Email'
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
        title="Create Account"
        />
        <View>
        <Text>Already have an account</Text>
        <TouchableOpacity onPress={() => navigation.replace('login')}>
          <Text>Login</Text>
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
    },
  });

import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthLayout from '../Layouts/AuthLayout';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AuthLayout>
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
                    title="Login"
                    onPress={() => navigation.navigate('MainHome')}
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
  },
});

import React from 'react'
import { View,StyleSheet } from 'react-native';
import { Image,Text} from 'react-native-elements';

const AuthLayout = ({children}) => {
    return (
        <>
           <View>
           <Text h3>Budget Tracker</Text>
            <Image
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            style={{ width: 200, height: 200 }}
            />
           </View>
            
            {children}
            
            
        </>
    )
}

export default AuthLayout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

import React from 'react'
import { View,StyleSheet } from 'react-native';
import { Image,Text} from 'react-native-elements';

const AuthLayout = ({children}) => {
    return (
        <>
           <View style={styles.header}>
           <Text h3 style={styles.headerTitle}>Budget Tracker</Text>
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
    header: {
      marginBottom: 20
    },
    headerTitle: {
      marginBottom: 10
    }
  });

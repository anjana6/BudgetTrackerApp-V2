import React from 'react'
import { View,StyleSheet } from 'react-native';
import { Image,Text} from 'react-native-elements';

const AuthLayout = ({children}) => {
    return (
        <>
           <View style={styles.header}>
           <Text h3 style={styles.headerTitle}>Budget Tracker</Text>
            <Image
            source={require('../images/income.jpg')}
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
      marginBottom: 10,
      color: '#16087A'
    }
  });

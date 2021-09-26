import React from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {Text,Image,Card,Button} from 'react-native-elements';
import {View,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {
    return (
        <HomeLayout title="Home" navigation={navigation}>
            <View style={styles.container}>
            <View>
                <Text>Balance</Text>
                <Text h3>70000</Text>
                <Image
                source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
                style={{ width: 200, height: 200 }}
                />
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('BudgetView',{
                budget: 'Income',
            })}>
                <Card>
                <Card.Title>
                    <Icon 
                    name='arrow-alt-circle-down' 
                    size={25}
                    color="green"
                    />
                    <Text h4>INCOME</Text>
                    
                </Card.Title>
                <Card.Divider/>
                <Text h4>50,000</Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BudgetView',{
                budget: 'Expence',
            })}>
                <Card>
                <Card.Title><Icon 
                    name='arrow-alt-circle-up' 
                    size={25}
                    color="red"
                    />
                    <Text h4>EXPENCE</Text></Card.Title>
                <Card.Divider/>
                <Text h4>10,000</Text>
                </Card>
               </TouchableOpacity> 
            </View>
            <Button
                icon={<Icon name='plus' color='#ffffff' />}
                title='ADD' 
                onPress={() => navigation.navigate('BudgetAddingScreen')}
            />
        </View>
        </HomeLayout>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  

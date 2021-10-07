import React,{useEffect,useState} from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {Text,Image,Card,Button} from 'react-native-elements';
import {View,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import httpServie from '../services/HttpService';
import budgetService from '../services/budgetService';
import {PieChart} from 'react-native-svg-charts';
import LatestBudget from '../components/LatestBudget';
import { ScrollView } from 'react-native-gesture-handler';




const HomeScreen = ({navigation}) => {
    const [budget,setBudget] = useState(null)
    useEffect(() => {
        getDate()
    }, [])

    const getDate = async () => {
        try {
           const res = await budgetService.fetchMonthlyBudget();
           setBudget(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const data = [{total: budget?.income, fill: '#4AE215'},{total: budget?.expense, fill: '#15AAE2' }];
    
    // const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    // console.log(randomColor());
    console.log(budget);
        const pieData = data
            .filter((value) => value.total > 0)
            .map((value, index) => ({
                value: value.total,
                svg: {
                    fill: value.fill,
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
    return (
        <HomeLayout title="Home" navigation={navigation}>
            <ScrollView>
            <View style={styles.container}>
                { (budget?.income !== 0 || budget?.expense !== 0) && <>
                    <PieChart style={{ height: 150 }} data={pieData}/>
                    <View style={styles.charlebal}>
                        <Text><Icon 
                        name='stop' 
                        size={15}
                        color="#4AE215"
                        />Income</Text>
                        <Text><Icon 
                        name='stop' 
                        size={15}
                        color="#15AAE2"
                        />Expense</Text>
                    </View>
                    </>
                }
                

                {/* <View style={styles.homeHead}>
                    <Text>Balance</Text>
                    <Text h3>aa</Text>
                   
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
                <Text h4 style={styles.currency}>aa</Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BudgetView',{
                budget: 'Expense',
            })}>
                <Card>
                <Card.Title><Icon 
                    name='arrow-alt-circle-up' 
                    size={25}
                    color="red"
                    />
                    <Text h4>EXPENCE</Text></Card.Title>
                <Card.Divider/>
                <Text h4 style={styles.currency}>aa</Text>
                </Card>
               </TouchableOpacity> 
            </View> */}
             <TouchableOpacity onPress={() => navigation.navigate('BudgetView',{
                budget: 'Expense',
            })}>
            <Card>
                <View style={styles.homeHead}>
                    <Text>Balance</Text>
                    <Text h3>{budget?.income- budget?.expense}</Text>
                   
                </View>
                <View style={styles.expense_income}>
                    <View>
                        <Text h5> <Icon 
                    name='arrow-alt-circle-down' 
                    size={20}
                    color="green"
                    />INCOME</Text>
                        <Text style={styles.currency}>{budget?.income}</Text>
                    </View>
                    <View>
                        <Text h5><Icon 
                            name='arrow-alt-circle-up' 
                            size={20}
                            color="red"
                    />EXPENCE</Text>
                        <Text style={styles.currency}>{budget?.expense}</Text>
                    </View>
                </View> 
            </Card>
            </TouchableOpacity>
            <View style={styles.button}>
            <Button
                icon={<Icon name='plus' color='#ffffff' />}
                title='ADD' 
                onPress={() => navigation.navigate('BudgetAddingScreen')}
            />
            </View>
            <LatestBudget/>
        </View>
        </ScrollView>
        </HomeLayout>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:5
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    homeHead: {
        alignItems: 'center'
    },
    button: {
        marginVertical: 10,
        marginHorizontal:10
    },
    currency: {
        textAlign: 'center'
    },
    expense_income: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    charlebal: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  });
  

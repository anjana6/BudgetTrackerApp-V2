import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import CategorySetttingScreen from './src/screens/CategorySetttingScreen';
import BudgetViewScreen from './src/screens/BudgetViewScreen';
import BudgetCategoryItemScreen from './src/screens/BudgetCategoryItemScreen';
import BudgetCategoryDetailsScreen from './src/screens/BudgetCategoryDetailsScreen';
import BudgetAddingScreens from './src/screens/BudgetAddingScreens';
import { StateProvider } from './src/Store';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={NestedHomeScreens} />
      <Tab.Screen name="Settings" component={CategorySetttingScreen} />
    </Tab.Navigator>
  )
}

const NestedHomeScreens = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BudgetView" component={BudgetViewScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BudgetCategoryItem" component={BudgetCategoryItemScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BudgetCategoryDetails" component={BudgetCategoryDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BudgetAddingScreen" component={BudgetAddingScreens} options={{headerShown:false}}/> 
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <StateProvider>
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="MainHome" component={TabScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </StateProvider>
  );
}

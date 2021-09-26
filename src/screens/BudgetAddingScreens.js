import React from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import {View,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Input,Button} from 'react-native-elements';

const BudgetAddingScreens = ({navigation}) => {
    return (
        <HomeLayout title="New Budget" navigation={navigation}>
            <View style={styles.container}>
            <Picker
        // selectedValue={selectedValue}
        style={{ height: 50}}
        mode="dropdown"
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Income" value="java" />
        <Picker.Item label="Expense" value="js" />
      </Picker>
      <Picker

        // selectedValue={selectedValue}
        style={{ height: 50}}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Income" value="java" />
        <Picker.Item label="Expense" value="js" />
      </Picker>
          <Input
                placeholder='Title'
                onPressIn={() => console.log('date')}
            />
            <Input
                placeholder='Title'
            />
            <Input
                placeholder='Amount'
            />

<Button
  title="Add"
/>
            {/* <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
        <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

          <MenuTrigger  >
          <Text>DropDown Menu</Text>
          </MenuTrigger  >

          <MenuOptions>
            <MenuOption value={"Login"}>
              <Text >Login</Text>
            </MenuOption>
            <MenuOption value={"Register"}>
              <Text >Register</Text>
            </MenuOption>
            <MenuOption value={"Download"}>
              <Text>Download</Text>
            </MenuOption>
            <MenuOption value={"Logout"}>
              <Text >Logout</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true}>
              <Text >Disabled Menu</Text>
            </MenuOption>
          </MenuOptions>

        </Menu>
      </MenuProvider> */}
            </View>
        </HomeLayout>
    )
}

export default BudgetAddingScreens;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 10
    }
})

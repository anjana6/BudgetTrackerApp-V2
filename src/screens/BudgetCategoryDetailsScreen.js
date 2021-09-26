import React from 'react'
import DetailsItemRow from '../components/DetailsItemRow';
import { StyleSheet, View } from 'react-native';
import {Card,Button} from 'react-native-elements';
import HomeLayout from '../Layouts/HomeLayout';
import Icon from 'react-native-vector-icons/FontAwesome';

const BudgetCategoryDetailsScreen = ({navigation}) => {
    return (
        <HomeLayout title="Details" navigation={navigation}>
        <View>
            <Card >
            <DetailsItemRow title="Income" value="5000"/>

            <DetailsItemRow title="Category" value="Food"/>

            <DetailsItemRow title="Title" value="House"/>

            <DetailsItemRow title="Date" value="2021/10/18"/>
            </Card>
            </View>
            <View style={styles.buttons}>
            <Button
                icon={
                    <Icon
                    name="edit"
                    size={20}
                    color="white"
                    />
                }
                title="EDIT"
                />

            <Button
                icon={
                    <Icon
                    name="trash-o"
                    size={20}
                    color="white"
                    />
                }
                title="DELETE"
                />
            </View>
        
        </HomeLayout>
    )
}

export default BudgetCategoryDetailsScreen;

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-around'
    }
})

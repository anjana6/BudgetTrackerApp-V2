import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Divider} from 'react-native-elements';

const DetailsItemRow = ({title,value}) => {
    return (
        <>
            <View  style={styles.itemRow}>
                <View>
                    <Text h5>{title}</Text>
                </View>
                <View>
                    <Text h5>{value}</Text>
                </View>
            </View> 
            <Divider orientation="vertical" width={5} />
        </> 
    )
}

export default DetailsItemRow;

const styles = StyleSheet.create({
    itemRow: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    }
})

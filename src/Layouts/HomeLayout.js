import React from 'react';
import { View } from 'react-native';
import {Text} from 'react-native-elements';
import MainHeader from '../components/MainHeader';


const HomeLayout = ({children,title,navigation}) => {
    return (
        <>
            <MainHeader title={title} navigation={navigation}/>
        
            
                {children}
            
        </>
    )
}

export default HomeLayout

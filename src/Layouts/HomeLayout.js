import React from 'react';
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

import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableNativeFeedback, Image } from 'react-native';

import Colors from '../../constants/colors';

const OverlayComp = () => {
    return (
        <TouchableNativeFeedback style={{ borderRadius: 10, height: 100 }}>
            <View style={ styles.overlayContainer }>
                {/* <Image source={{ uri: 'https://pixabay.com/images/id-5712780/' }} /> */}
                <Text style={ styles.overlayText }>BITCOIN: $18,000</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default function ({title}) {
    return (
        <View 
            style={{
                ...styles.headerBase,
                ...Platform.select({
                    ios: styles.headerIOS, 
                    android: styles.headerAndroid
                })
            }}
        >
            <Text style={styles.title}>{title}</Text>
            <OverlayComp />
               
        </View>
    );
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 150,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
        
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid:{
        backgroundColor: Colors.primary,
    },
    title: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        fontSize: 25,
        marginTop: -70,
        fontWeight: 'bold'
    },
    price: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        fontSize: 30
    },
    overlayContainer: {
        backgroundColor: '#fff', 
        width: '70%', 
        borderRadius: 10, 
        elevation: 5, 
        position: "absolute", 
        height: 100, 
        top: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlayText: {
        fontSize: 20
    }
});
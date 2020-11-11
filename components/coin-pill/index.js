import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Coin from './coin';
import Price from './price';
import Holdings from './holdings';

export default function(props) {
    return (
        <View style={styles.centered}>
            <Coin />
            <Price />
            <Holdings />
        </View>
    )
}

const styles = StyleSheet.create({
    centered: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        width: '100%'
    }
})
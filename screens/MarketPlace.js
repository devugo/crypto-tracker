import React from 'react';
import { Text, View } from 'react-native';

import Header from '../components/header';

export default function() {
    return (
        <View>
            <Header title="Crypto Tracker" />
            <View><Text>Market Place Screen</Text></View>
        </View>
    )
}
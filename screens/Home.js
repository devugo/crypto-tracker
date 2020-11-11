import React from 'react';
import { Text, View } from 'react-native';

import Header from '../components/header';

export default function() {
    return (
        <View>
            <Header title="Crypto Tracker" />
            <View><Text>Home Screen</Text></View>
        </View>
    )
}
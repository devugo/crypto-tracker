import React from 'react';
import { Text, View } from 'react-native';

import Header from '../components/header';

export default function() {
    return (
        <View style={{ backgroundColor: '#EBEBED', height: '100%' }}>
            <Header price="$ 19,500" title="Crypto Tracker" />
            <View><Text>Favorites Screen</Text></View>
        </View>
    )
}
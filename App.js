import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import CoinPill from './components/coin-pill';
import Header from './components/header';
import BottomNavigations from './navigation/BottomNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigations />
      {/* <View>
        <Header title="Crypto Tracker" />
        <CoinPill />

        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
  );
}

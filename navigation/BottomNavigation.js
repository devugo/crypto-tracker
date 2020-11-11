import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/Home';
import FavoritesScreen from '../screens/Favorites';
import MarketPlaceScreen from '../screens/MarketPlace';
import colors from '../constants/colors';

function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
  
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: 70, alignItems: 'center'}}>
            {state.routes.map((route, index) => {
                // console.log(route)
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;

                let iconSize = 25;
                let tabOpacity = 0.5;
                let iconTextSize = 12;

                if(isFocused){
                    iconSize = 30;
                    tabOpacity = 1;
                    iconTextSize = 15
                }

        
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
        
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
        
                return (
                    <TouchableNativeFeedback
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ height: '100%', display: 'flex', alignItems: 'center', width: '33.33%' }}
                        key={index}
                    >
                        <View style={{ elevation: 5, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', width: '33.33%', alignItems: 'center', justifyContent: 'center', height: isFocused ? '120%' : '100%' }}>

                            {
                                route.name == 'Favorites' ? <MaterialIcons name="favorite" color={colors.primary} size={iconSize} style={{  opacity: tabOpacity }} /> :
                                route.name == 'Market Place' ? <MaterialIcons name="store" color={colors.primary} size={iconSize} style={{  opacity: tabOpacity }} />  :
                                <MaterialCommunityIcons name="home" color={colors.primary} size={iconSize} style={{  opacity: tabOpacity }} />
                            }
                            <Text style={{ opacity: tabOpacity, color: colors.primary, fontWeight: 'bold', fontSize: iconTextSize }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function () {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#694fad' }}
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
            initialRouteName="Home"
            tabBar={props => <MyTabBar {...props} />}
        >
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="favorite" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen name="Market Place" component={MarketPlaceScreen} />
        </Tab.Navigator>
    );
}
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './home';
import Settinngs from './settinngs';

const Tab = createMaterialTopTabNavigator();
import React from 'react'

export default function _layout() {
    return (
        <Tab.Navigator tabBarPosition='top'
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#ffffff' }
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settinngs} />
        </Tab.Navigator>
    )
}
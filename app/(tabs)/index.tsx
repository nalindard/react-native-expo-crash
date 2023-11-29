import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function index() {
    return (
        <View>
            <StatusBar style='inverted' />
            <Text>index</Text>
        </View>
    )
}
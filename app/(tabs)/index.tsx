import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Taskslist from '../../components/taskslist'

export default function index() {

    const [dataFromChild, setDataFromChild] = useState<number>()

    const getChildData = (data: number) => {
        setDataFromChild(data)
    }

    return (
        <View className='bg-slate-200 dark:bg-slate-800'>
            <StatusBar style='inverted' />

            <Text className='bg-slate-300 dark:bg-slate-800 text-black dark:text-white'>Home page</Text>

            <Text>Data From Child: {dataFromChild} </Text>

            <Taskslist parentMsg={'From upperstream'} setDataFromChild={getChildData} />
        </View>
    )
}
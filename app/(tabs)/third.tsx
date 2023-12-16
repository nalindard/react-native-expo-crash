import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import DarkMode from '../../components/darkMode'


export default function third() {
  return (
    <View className='bg-slate-400 h-full justify-center items-center'>
      <Text className='text-white text-4xl font-bold uppercase'>third</Text>

      <View className='my-7 w-full px-2 py-1'>
        <TextInput className='border border-slate-700 shadow-sm rounded-full p-2 px-4 w-full' placeholder='Search here...' />
      </View>

      <DarkMode />

      <View className='bg-slate-600 dark:bg-slate-300 h-28 w-11/12'>
        <ScrollView horizontal={true}>
          <View className='w-48 h-24 rounded border border-slate-800 my-2 mx-4 bg-slate-500 dark:bg-slate-50'></View>
          <View className='w-48 h-24 rounded border border-slate-800 my-2 mx-4 bg-slate-500 dark:bg-slate-50'></View>
          <View className='w-48 h-24 rounded border border-slate-800 my-2 mx-4 bg-slate-500 dark:bg-slate-50'></View>
          <View className='w-48 h-24 rounded border border-slate-800 my-2 mx-4 bg-slate-500 dark:bg-slate-50'></View>
          <View className='w-48 h-24 rounded border border-slate-800 my-2 mx-4 bg-slate-500 dark:bg-slate-50'></View>
          <View className='w-48 h-24 rounded border border-slate-800 my-2 mx-4 bg-slate-500 dark:bg-slate-50'></View>
          <View className='w-48 h-24 rounded border border-slate-800 my-2 mx-4 bg-slate-500 dark:bg-slate-50'></View>
        </ScrollView>
      </View>
    </View>
  )
}
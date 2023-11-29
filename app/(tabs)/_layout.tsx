import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ headerTitle: 'Tab 01', tabBarLabel: 'Tabone', headerShown: !false }} />
      <Tabs.Screen name='second' options={{ headerTitle: 'Tab 02', tabBarLabel: 'Tabtwo', headerShown: !false }} />
      <Tabs.Screen name='third' options={{ headerTitle: 'Tab 03', tabBarLabel: 'Tabthree', headerShown: !false }} />
      {/* <Tabs.Screen name='fourth' options={{ headerTitle: 'Tab 04', tabBarLabel: 'Tabfour', headerShown: !false,  }} /> */}
      <Tabs.Screen name='materialtop' options={{ headerTitle: 'Material Top', tabBarLabel: 'materialtop', headerShown: !false }} />
    </Tabs>
  )
}
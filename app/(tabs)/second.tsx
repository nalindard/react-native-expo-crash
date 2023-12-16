import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function second() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>

        <StatusBar style='inverted' />


        <View style={styles.box_3}>
          <ScrollView contentContainerStyle={styles.hr} horizontal>
            <View style={styles.fitem}></View>
            <View style={styles.fitem}></View>
            <View style={styles.fitem}></View>
            <View style={styles.fitem}></View>
            <View style={styles.fitem}></View>
            <View style={styles.fitem}></View>
          </ScrollView>
        </View>


        <View style={styles.box_1}>
          <Text style={styles.title}>second</Text>
        </View>

        <View style={styles.box_2}></View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 27,
  },

  scroll: {
    height: '300%',
    backgroundColor: '#a2e5f2',
    // flex: 1,
    // flexDirection: '-reverse'
    // flex: 2
  },

  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  box_1: {
    backgroundColor: 'powderblue',
    flex: 1,
  },
  box_2: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  box_3: {
    backgroundColor: 'teal',
    flex: 1,
  },

  hr: {
    backgroundColor: 'black',
    width: '100%',
    // height: 100,
    flexDirection: 'row',
    padding: '2%',
    gap: 5,
    overflow: 'scroll'
  },

  fitem: {
    backgroundColor: 'white',
    width: 50,
    aspectRatio: 1,
  }
  // box_4:{},
})
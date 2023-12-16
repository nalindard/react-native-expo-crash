import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

export default function Task(props: { data: task, deleteTask: Function, toogleTask: Function }) {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.data?.name}</Text>
            </View>
            {/* <View style={styles.circular}></View> */}

            <View style={styles.left}>
                <Switch
                    value={props.data?.completed}
                    onValueChange={() => { props.toogleTask(props.data?.id) }}
                    trackColor={{ false: 'black', true: 'white' }}
                    thumbColor={props.data?.completed ? 'black' : 'white'}
                />
                <View>
                    <Button
                        onPress={() => { props.deleteTask(props.data?.id) }}
                        title='Delete'
                        color='black'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'silver',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 4,

    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap',
        width: 200
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'red',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: 'white'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5,
    },
})
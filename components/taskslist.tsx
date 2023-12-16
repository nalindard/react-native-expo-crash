import { View, Text, Button, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { initialTaskList } from '../constants/initialTaskList'
import Task from './taskitem'
import confirm from '../utils/confirm'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { saveData, getData } from '../utils/storage'

import { styled } from 'nativewind'

const StyledView = styled(View)

export default function Taskslist(props: { parentMsg: string, setDataFromChild: Function }) {

    // const [tasklist, setTasklist] = useState<task[]>([...initialTaskList])
    const [tasklist, setTasklist] = useState<task[]>([])
    const [inputText, setInputText] = useState<string>('')

    useEffect(() => {
        console.log('This Runs On Mounted')

        if (!getData('task-list')) {
            // setTasklist([...getData('task-list')])
            console.log(getData('task-list'));
        } else {
            setTasklist([...initialTaskList])
        }

    }, []);



    useEffect(() => {
        console.log('Action triggerd')
        saveData('task-list', tasklist)
    }, [tasklist])

    // Add task,
    const addTask = (newtask: string) => {

        if (newtask.length < 1) {
            Alert.alert('Empty filed', 'Input field is pretty empty !')
        } else {

            setTasklist([...tasklist, {
                id: Date.now(),
                name: newtask,
                completed: false
            }])
            setInputText('')
        }
    }

    // Mark task,
    const toogleTask = (id: number) => {
        let comp: task[] = []

        tasklist.forEach(t => {
            if (t.id === id) {
                comp.push({ ...t, completed: !t.completed })
            } else {
                comp.push(t)
            }
        })

        setTasklist(comp)
    }

    // Delete task,
    const deleteTask = (id: number) => {
        // setTasklist(tasklist.filter(t => t.id !== id))
        // if (confirm('Confirm', 'Want to proceed anymore ?')) {setTasklist(tasklist.filter(t => t.id !== id))}
        Alert.alert(
            'Delete Task',
            'Delete the selected task',
            [
                {
                    text: 'Yes',
                    onPress: () => setTasklist(tasklist.filter(t => t.id !== id)),
                    style: 'default',
                },
                {
                    text: 'No',
                    onPress: () => { return },
                    style: 'cancel',
                },
            ],
            {
                cancelable: false,
            },
        );
    }

    // Update task,
    const updateTask = (id: number) => { }


    return (
        <StyledView className='bg-slate-100 dark:bg-slate-800'>
            <Text>Taskslist</Text>
            <Text>Parent Msg: {props.parentMsg}</Text>

            {/* <ScrollStyledView style={{ height: 520, visibility: 'hidden' }}>
                {tasklist.map((t: any) => {
                    return (
                        <StyledView key={t.id} style={{ height: 40 }}>
                            <Text> {t.name} </Text>
                        </StyledView>
                    )
                })}
            </ScrollStyledView> */}

            <StyledView className='bg-slate-100 dark:bg-slate-800'>
                <TextInput style={styles.input} value={inputText} placeholder='Make it full...' onChangeText={(i) => setInputText(i)} />
            </StyledView>

            <Button onPress={() => addTask(inputText)} title='Click to add item' color={"black"} />

            <TouchableOpacity
                style={styles.custombtnbg}
                onPress={() => props.setDataFromChild(Math.floor(Math.random() * 100))}
            >
                <Text style={styles.custombtn}>
                    Click to pass data to uppper
                </Text>
            </TouchableOpacity>

            <StyledView className='bg-slate-100 dark:bg-slate-800' style={{ height: 427 }}>
                <FlatList className='bg-slate-100 dark:bg-slate-800'
                    data={tasklist}
                    // renderItem={({ item }) => <Text> {item.name} </Text>} />
                    renderItem={
                        ({ item }) => {
                            return <Task data={item} deleteTask={deleteTask} toogleTask={toogleTask} />
                        }
                    } />
            </StyledView>
        </StyledView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 50,
        padding: 7,
        margin: 12,
        borderWidth: 2,
        borderColor: 'black'
    },

    custombtn: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: '400',
        fontSize: 15,
        height: 42,
        padding: 12,
    },
    custombtnbg: {
        borderColor: 'red',
        borderRadius: 12,
        backgroundColor: 'blue',
        overflow: 'hidden',
        marginTop: 2,
        marginBottom: 2,
    }

})
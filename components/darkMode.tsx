import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { withExpoSnack } from 'nativewind';
import { styled, useColorScheme } from "nativewind";
import { Switch } from 'react-native-gesture-handler';

// const StyledPressable = styled(Pressable)
const StyledText = styled(Text)
const StyledView = styled(View)

export default function DarkMode() {

    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <StyledView className='bg-white dark:bg-green-400 w-full py-7 rounded'>
            <StyledText className='text-green-700 dark:text-black text-2xl uppercase font-bold'>Dark Mode</StyledText>

            <Pressable onPress={toggleColorScheme}>
                <StyledText>Toogle Dark Mode</StyledText>

                <Text className='text-4xl dark:text-2xl'>{`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}</Text>

                <Switch />
            </Pressable>
        </StyledView>
    )
}
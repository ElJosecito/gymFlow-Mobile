import { View, Text, StatusBar } from 'react-native'
import React from 'react'

import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(Auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default RootLayout
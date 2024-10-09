import { View, Text, Pressable, TextInput, StatusBar } from 'react-native'
import React, {
  useState,
  
} from 'react'

import { useRouter } from 'expo-router'

// typeScript

const Login = () => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log(email,
      password)

    setEmail('')
    setPassword('') 

    router.navigate('/(tabs)')
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className='flex-1 justify-center items-center '>
        <Text className="font-bold text-xl">Login</Text>

        <View className="w-3/4">
          <TextInput
            placeholder="Email"
            value={email}
            className="border-2 border-gray-500 h-12 my-4 "
            onChangeText={(text) => {
              setEmail(text)
              console.log(text)
            }}
          />

          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            className="border-2 border-gray-500 h-12 my-4"
            onChangeText={(text) => {
              setPassword(text)
              console.log(text)
            }}
          />

          <Pressable
            onPress={handleLogin}
            className="bg-blue-500 h-12 justify-center items-center rounded-md"
          >
            <Text className="text-white">Login</Text>
          </Pressable>

        </View>

        <Pressable
          onPress={() => router.navigate('/(Auth)/Register')}
        >
          <Text className="text-blue-500">Go to Register</Text>
        </Pressable>

      </View>
    </>
  )
}

export default Login
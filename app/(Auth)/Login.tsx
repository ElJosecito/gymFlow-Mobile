import { View, Text, TextInput, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react'

import { useRouter } from 'expo-router'

import { useAuthStore } from '@/store/auth'
import { login } from '@/api/auth'

// eye icon
import { Feather } from '@expo/vector-icons'

const Login = () => {


  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const { setUserId, setToken } = useAuthStore() as { setUserId: (userId: string) => void, setToken: (token: string) => void }

  const handleLogin = async () => {
    try {
      const response = await login(email, password)
      if (response.status === 400) {
        Alert.alert('Error', 'Invalid email or password')
        return
      }
      setUserId(response.user.id)
      setToken(response.token)
      router.replace('/(tabs)/Home')

    } catch (error) {
      console.log(error)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View className='flex-1 pt-32 items-center bg-[#FFCE5B] px-5'>

      <Image
        source={require('@/assets/images/gym.gif')}
        className="w-44 h-44"
      />

      <View className="w-full">
        <TextInput
          placeholder="Insert your email here"
          value={email}
          placeholderTextColor={'grey'}
          className="border-2 border-gray-500 bg-slate-100 h-12 my-4 px-4 rounded-md font-bold"
          onChangeText={(text) => {
            setEmail(text)
            console.log(text)
          }}
        />

        <View className="relative">
          <TextInput
            placeholder="insert your password here"
            value={password}
            placeholderTextColor={'grey'}
            secureTextEntry={!showPassword}
            className="border-2 border-gray-500 bg-slate-100 h-12 my-4 px-4 rounded-md font-bold"
            onChangeText={(text) => {
              setPassword(text)
              console.log(text)
            }}
          />

          <Pressable
            onPress={() => handleShowPassword()}
            className="absolute right-4 bottom-7"
          >
            <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="grey" />
          </Pressable>
        </View>

        <Pressable
          onPress={() => handleLogin()}
          className="bg-blue-500 w-full h-12 rounded-md items-center justify-center"
        >
          <Text className="text-white">Login</Text>
        </Pressable>
      </View>

      <View
        className="mt-5 flex flex-row items-center"
      >
        <Text className="text-gray-500">Don't have an account?</Text>
        <Pressable
        >
          <Text className="text-blue-500 ml-2">Register</Text>
        </Pressable>
      </View>

    </View >
  )
}

export default Login
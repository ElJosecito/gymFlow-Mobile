import { View, Text, TextInput, Pressable } from 'react-native'
import React,{useState} from 'react'

import { useRouter } from 'expo-router'

import { useAuthStore } from '@/store/auth'
import { login } from '@/api/auth'


const Login = () => {


  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const { setUserId, setToken } = useAuthStore() as { setUserId: (userId: string) => void, setToken: (token: string) => void }

  const handleLogin = async () => {
    try {
      const response = await login( email, password )
      setUserId(response.user.id)
      setToken(response.token)

      console.log(response)
      router.replace('/(tabs)/Home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className='flex-1 justify-center items-center'>

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
          onPress={() => handleLogin()}
          className="bg-blue-500 w-full h-12 rounded-md items-center justify-center"
        >
          <Text className="text-white">Login</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default Login
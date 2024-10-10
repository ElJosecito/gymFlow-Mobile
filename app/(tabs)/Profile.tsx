import { View, Text, Pressable, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useAuthStore } from '@/store/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUser } from '@/api/user'
import moment from 'moment'
import { useRouter } from 'expo-router'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
const Profile = () => {

  interface User {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
    active: boolean,
    isAdmin: boolean,
    _id: string,
    createdAt: Date,
    updatedAt: Date,
    image: string,
    memberShip: string

  }

  const router = useRouter()

  const { userId } = useAuthStore() as { token: string, userId: string }
  const { logout } = useAuthStore() as { logout: () => void }

  const [user, setUser] = useState<User | null>(null)
  const [image, setImage] = useState<string>('')
  const [createDate, setCreateDate] = useState<string>('')
  const [updateDate, setUpdateDate] = useState<string>('')

  const getUserData = async () => {
    try {
      const response = await getUser(userId)
      setUser(response)
      setCreateDate(moment(response.createdAt).format('MMMM Do YYYY'))
      setUpdateDate(moment(response.updatedAt).format('MMMM Do YYYY'))

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])



  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 px-5'>
        <View className='flex-1 items-center'>
          {
            user?.image ? (
              <Image
                source={{ uri: user?.image?.replace(/\\/g, '/') }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <FontAwesome5 name='user-circle' size={100} />
            )
          }
          <View className='my-5 border-4 border-[#d6d6d6] p-2 px-4 rounded-2xl w-full flex justify-center items-center'>
            <Text className='font-bold text-xl capitalize'>{user?.firstName} {user?.lastName}</Text>
          </View>

          <View className='mb-5 border-4 border-[#d6d6d6] p-2 px-4 rounded-2xl w-full flex justify-center items-center'>
            <Text className='font-bold text-xl'>{user?.email}</Text>
          </View>

          <View className='mb-5 border-4 border-[#d6d6d6] p-2 px-4 rounded-2xl w-full flex justify-center items-center'>
            <Text className='font-bold text-xl'>{user?.phoneNumber}</Text>
          </View>

          <View className='mb-5 border-4 border-[#d6d6d6] py-3 px-10 rounded-2xl w-full flex flex-row justify-between items-center'>
            <Text className={`font-bold text-xl ${user?.active ? "text-green-600" : "text-red-600"}`}>{user?.active ? 'Active' : 'Inactive'}</Text>
            <Text className='font-bold text-xl capitalize'>{user?.memberShip}</Text>
          </View>

          <View className='mb-5 border-4 border-[#d6d6d6] p-2 px-4 rounded-2xl w-full flex justify-center items-center'>
            <Text className='font-bold text-xl'>{createDate}</Text>
          </View>

          <View className='mb-5 border-4 border-[#d6d6d6] p-2 px-4 rounded-2xl w-full flex justify-center items-center'>
            <Text className='font-bold text-xl'>{updateDate}</Text>
          </View>

          <Pressable
            onPress={() => {
              logout()
              router.replace('/(Auth)/Login')
            }}
            className='bg-red-600 w-full h-12 rounded-md items-center justify-center mt-5'
          >
            <Text className='text-white'>Logout</Text>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
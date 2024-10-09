import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

import { useAuthStore } from '@/store/auth'
import { getUser } from '@/api/user'
import { useRouter } from 'expo-router'

const Home = () => {

  const { userId } = useAuthStore() as { userId: string }
  const [user, setUser] = useState(null)

  const router = useRouter()

  const fetchUser = async () => {
    try {
      const response = await getUser(userId)
      setUser(response)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home
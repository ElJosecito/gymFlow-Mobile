import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useAuthStore } from '@/store/auth'
import { getGymEntry } from '@/api/gymEntry'

// socket io
import io from "socket.io-client";

const Home = () => {

  interface GymStatus {
    currentCapacity: number,
    message: string,
    userId: string
  }

  interface currentCapacity {
    currentCapacity: number
  }

  const [gymStatus, setGymStatus] = useState<GymStatus | null>(null)
  const [currentCapacity, setCurrentCapacity] = useState<currentCapacity>({ currentCapacity: 0 })

  const getGymStatus = async () => {
    try {
      const response = await getGymEntry() as GymStatus
      setCurrentCapacity(response)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGymStatus()
  }, [])

  useEffect(() => {
    const socket = io("http://10.0.0.178:3000"); // Conectar al servidor

    // Escuchar el evento gymStatusUpdate
    socket.on("gymStatusUpdate", (data) => {
      console.log("Actualización de capacidad del gimnasio:", data);
      setGymStatus(data);
    });

    // Limpiar la conexión cuando el componente se desmonte
    return () => {
      socket.disconnect();
    };
  }, [setGymStatus]);


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className='flex-1 justify-center items-center'>
        {
          gymStatus ? (
            <>
              <Text className="font-black text-9xl ">{gymStatus.currentCapacity}</Text>
            </>
          ) : (
            <>
              <Text className="font-black text-9xl">{currentCapacity.currentCapacity}</Text>
            </>
          )
        }
      </View>
    </>
  )
}

export default Home
import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

const Nfc = () => {
  const [nfc, setNfc] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Estado para forzar recarga

  const handleNFCTap = () => {
    setNfc(true);
    setTimeout(() => {
      setNfc(false);
      setRefreshKey((oldKey) => oldKey + 1);
    }, 6000);
  };


  return (
    <View key={refreshKey} className='flex-1 justify-center items-center bg-white'>
      {nfc ? (
        <>
          <Image source={require('@/assets/images/nfc.gif')} className='w-64 h-64' />
          <Text className='text-2xl text-green-600'>NFC is On</Text>
        </>
      ) : (
        <>
          <Image source={require('@/assets/images/nfc.png')} className='w-52 h-52' />
          <Text className='text-2xl text-red-600 mt-11'>NFC is Off</Text>
        </>
      )}

      <Pressable
        onPress={handleNFCTap}
        className='bg-blue-500 w-64 h-12 rounded-md items-center justify-center mt-10'
      >
        <Text className='text-white'>Tap NFC</Text>
      </Pressable>

      
    </View>
  );
};

export default Nfc;

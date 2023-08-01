import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
const Cancelled = () => {
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
        navigation.navigate('Home')
        },6000)
    })
  return (
    <View className='flex-1 items-center justify-center'>
     
     
            <LottieView
            // source={require('../assets/images/cancelled.json')}
            autoPlay
            loop
            style={{
                width:100,
                height:100,
            }}
            className='pt-5'/>
              <Text className='font-extrabold text-neutral-400 text-3xl py-10'>Delivery Cancelled...</Text>

 
    </View>
  )
}

export default Cancelled
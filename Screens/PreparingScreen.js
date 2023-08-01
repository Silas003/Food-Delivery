import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'


const PreparingScreen = () => {
        const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.push('Delivery')
        },5000)
    },[])
   
    
  return (
    <View className='flex-1 bg-neutral-100 items-center justify-center'>
        <Image source={require('../assets/images/delivery.gif')}
        className='h-80 w-80 pt-4'/>
        <LottieView
            
            autoPlay
            loop
            style={{
                width:100,
                height:100,
            }}
            className='pt-5'/>
        <Text className='font-extrabold text-neutral-400 text-3xl py-10'>Preparing Order...</Text>
    </View>
  )
}

export default PreparingScreen
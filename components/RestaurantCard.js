import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import * as Icon from 'react-native-feather'
import { ThemeColors } from '../theme/Index'
const RestaurantCard = ({item}) => {
    const navigation=useNavigation()
  return (
    <Pressable
    onPress={()=>navigation.navigate('Restaurant',{...item})}>
        <View 
        style={{shadowColor:ThemeColors.bgColor(0.2),
        shadowRadius:7}}
        className='mr-4 bg-white rounded-3xl shadow-lg'>
            <Image className='h-36 w-64 rounded-t-3xl ' source={item.image}/>

        <View className='px-3 pb-4 space-y-2'>
            <Text className='text-lg font-bold pt-2'>{item.name}</Text>
        
        <View className='flex-row items-center space-x-1'>
            <Image source={require('../assets/images/fullStar.png')}className='h-4 w-4'/>
            <Text className='text-xs'>
                <Text className='text-green-500'>{item.stars} </Text>
                <Text className='text-gray-500'>({item.reviews} reviews)  </Text>
                <Text className='font-semibold'>{item.category}</Text>
            </Text>
            </View>
            <View className='flex-row items-center space-x-2'>
                <Icon.MapPin color={'gray'} height={14} width={14}/>
                <Text className='text-gray-600 text-xs'>Nearby. {item.address}</Text>
            </View>
        </View>
        </View>
    </Pressable>
  )
}

export default RestaurantCard
import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ThemeColors } from '../theme/Index'
import * as Icon from 'react-native-feather'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsById, selectBasketTotal } from '../Slices/basketSlice'
import { Alert } from 'react-native'

const DishRow = ({item}) => {
    const totalItems=useSelector(state=>selectBasketItemsById(state,item.id))
    const dispatch=useDispatch()

    const handleDecrease=()=>{
        dispatch(removeFromBasket({id : item.id}))
    }
    const handleIncrease=()=>{
        dispatch(addToBasket({...item}))
    }
    const Alarm=()=>{
        Alert.alert('Cart','Item not selected')
    }
  return (
    <View className='flex-row mx-2pt-5 items-center mb-3 shadow-2xl p-3 bg-white rounded-3xl'>
        <Image source={item.image} className='rounded-3xl' style={{height:100,width:100}}/>
        <View className='flex flex-1 space-y-3'>
            <View className='pl-2'>
                <Text className='text-xl font-semibold'>{item.name}</Text>
                <Text className='text-gray-500'>{item.description}</Text>
            </View>
            <View className='items-center flex-row justify-between pl-2'>
                <Text className='font-bold text-gray-700 text-base'>${item.price}</Text>
                <View className='flex-row items-center'>
                    <TouchableOpacity 
                    disabled={!totalItems.length}
                    onPress={handleDecrease}
                    className='p-1 rounded-full'
                    style={{backgroundColor:ThemeColors.text}}> 
                        <Icon.Minus stroke={'white'} strokeWidth={2}/>
                    </TouchableOpacity>
                    <Text className='px-2'>{totalItems.length}</Text>
                    <TouchableOpacity 
                    onPress={handleIncrease}
                    className='p-1 rounded-full'
                    style={{backgroundColor:ThemeColors.text}}> 
                        <Icon.Plus stroke={'white'} strokeWidth={2}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>  
    </View>
  )
}

export default DishRow
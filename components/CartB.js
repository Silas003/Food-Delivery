import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import {selectBasketItems, selectBasketTotal} from '../Slices/basketSlice'
import { ThemeColors } from '../theme/Index'

const CartB = () => {
    const navigation=useNavigation()
    const cartTotal=useSelector(selectBasketTotal)
    
    cartItems=useSelector(selectBasketItems )
    if (!cartItems.length>0)return;
  return (
             <View className='absolute w-full z-50 p-2  bottom-1 '>
                <TouchableOpacity 
                onPress={()=>navigation.push('Cart')}
                style={{backgroundColor:ThemeColors.bgColor(1)}}
                className='flex-row justify-between items-center rounded-full p-4 py-3'>
                    <View className='rounded-full items-center justify-center p-2 bg-neutral-400 opacity-3 px-2 h-11 w-11'>
                        <Text className='font-extrabold text-base text-white'>{cartItems.length}</Text>
                    </View>
                    <Text className='font-extrabold text-3xl text-white'>View Cart</Text>
                    <Text className='font-extrabold text-base text-white'>${cartTotal}</Text>
                  
                </TouchableOpacity>

           
            
                
            </View>
              
           
  )
}

export default CartB
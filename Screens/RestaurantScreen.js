import { View, Text, Image, Dimensions,ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import Menu from '../components/Menu'
import CartB from '../components/CartB'
import { useDispatch } from 'react-redux'
import {setResturant} from '../Slices/ResturantSlice'
import { useSelector } from 'react-redux'
import { ThemeColors } from '../theme/Index'
import DishRow from '../components/DishRow'
import { addToBasket } from '../Slices/basketSlice'
// import { selectResturant } from '../Slices/RestaurantSlice'
const {width,height}=Dimensions.get('window')
const RestaurantScreen = () => {
    const {params: item
       }=useRoute()
    const [count,setCount]=useState(0)
    const navigation=useNavigation()
    const dispatch=useDispatch()
  
useEffect(()=>{
    if(item && item.id){
      dispatch(setResturant({...item}))  
    }
},[])

 

  return (
    <View>
      
         <CartB />
             <ScrollView  >
                 <View className="relative">
                    <Image source={item.image}
                    className=" h-80 w-full " />
                    <TouchableOpacity 
                        onPress={()=>navigation.goBack()} 
                        className="absolute top-10 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={ThemeColors.text}/>
                    </TouchableOpacity>
                </View>
                <View
                    style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} 
                    className="bg-white -mt-3 pt-6">
                        </View>
                        <View className=' flex-1'>
                            <View className='px-3 pb-4 space-y-2'>
                                <Text className=' font-bold text-4xl pt-2'>{item.name}</Text>
            
                                <View className='flex-row items-center space-x-1'>
                                    <Image source={require('../assets/images/fullStar.png')}className='h-4 w-4'/>
                                        <Text className='text-xs'>
                                                <Text className='text-green-500'>{item.stars} </Text>
                                                <Text className='text-gray-500'>({item.reviews} reviews)  </Text>
                                                <Text className='font-semibold'>{item.category}</Text>
                                        </Text>
                                    <View className='flex-row items-center space-x-2'>
                                        <Icon.MapPin color={'gray'} height={14} width={14}/>
                                        <Text className='text-gray-600 text-xs'>Nearby. {item.address}</Text>
                                    </View>            
                        </View>
                        <Text className='text-gray-600 font-semibold'>{item.description}</Text>        
                </View>
                           
                            {item.dishes.map(dish=>{
                                return(
                                    <DishRow
                                item={{...dish}}
                                key={dish.index}
                                    />
                      
                                )
                            })}
                            
                            
                        </View>
            </ScrollView> 
   </View>
  )
   
   
   
}

export default RestaurantScreen
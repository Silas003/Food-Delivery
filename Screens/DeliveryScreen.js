import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import * as Iocn from 'react-native-feather'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import MapView,{Marker}from 'react-native-maps'
import { ThemeColors } from '../theme/Index'
import { featured } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { selectResturant } from '../Slices/ResturantSlice'
import { emptyBasket } from '../Slices/basketSlice'


const{width,height}=Dimensions.get('window')
const DeliveryScreen = () => {
const restaurant=useSelector(selectResturant)
const dispatch=useDispatch()
const cancelOrder=()=>{
    navigation.push('Cancelled')
    dispatch(emptyBasket())
}
    const navigation=useNavigation()
  return (
    <View className='flex-1 bg-neutral-100'>
        
            <MapView
            className='flex-1'
            initialRegion={
               {
                longitude:restaurant.lng,
                latitude:restaurant.lat,
                latitudeDelta:0.01,
                longitudeDelta:0.01,
               }
            }
            mapType='standard'
            style={{}}>

                <Marker
               coordinate={{
                longitude:restaurant.lng,
                latitude:restaurant.lat,
               }} 
               title={restaurant.name}
               pinColor={ThemeColors.bgColor(1)}
               description={restaurant.description}/>
            </MapView>
           
       
            <View className='absolute x-50 bottom-0 p-5 bg-white rounded-t-3xl w-full'>
                <View className='flex-row items-center justify-between'>
                    <View>
                            <Text className='font-semibold text-lg text-neutral-500'>Estimated Time</Text>
                            <Text className='font-extrabold text-3xl'>20-30 minutes</Text>
                            <Text className='font-semibold text-base text-neutral-500'>Your Order is on the way..</Text>
                         
                    </View>
                    <Image source={require('../assets/images/bikeGuy2.gif')}
                            className='h-24 w-24'/>
                </View>
                <View 
                style={{backgroundColor:ThemeColors.bgColor(1)}}className='rounded-full flex-1 bg-orange-300 p-2'>
                    <View className='flex-row items-center justify-between'>
                        <View className='flex-row items-center justify-center'>
                                    <Image source={require('../assets/images/deliveryGuy.png')}
                                             className='rounded-full h-16 w-16 border-2 border-neutral-400'/>
                            <View>
                                        <Text className='font-bold text-white text-2xl'>Kwame Dansoh</Text>
                                        <Text className='text-lg text-neutral-500 font-semibold'>Your Driver</Text>
                            </View>
                        
                        </View>
                        <View className='flex-row items-center px-2 justify-between p-4'>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('Call')}
                            className='rounded-full w-14 h-14 items-center justify-center bg-white'>
                                <Iocn.Phone color={'green'} strokeWidth={3}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={cancelOrder}className='rounded-full w-14 ml-3 h-14 items-center justify-center bg-white'>
                                <Iocn.XCircle color={'red'} strokeWidth={3}/>
                                </TouchableOpacity>
                        </View>
                      
                    </View>
                </View>

            </View>
    </View>
  )
}

export default DeliveryScreen
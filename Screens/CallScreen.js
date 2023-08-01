import { View, Text, TouchableOpacity, ScrollView ,Image} from 'react-native'
import React,{useState} from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { ThemeColors } from '../theme/Index'
const CallScreen = () => {
 
    const [data,setData]=useState([1,2,3])
    const navigation=useNavigation()
  return (
    <View className='flex-1 bg-neutral-100'>
        <View className='flex-row p-2 mt-3 items-center '>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{backgroundColor:ThemeColors.bgColor(1)}}
                     className='rounded-full  w-11 h-11 items-center  justify-center'>
                            <Icon.ArrowLeft color='white' />
                    </TouchableOpacity>
            <View>
                <Text className='font-extrabold text-2xl px-28'>{'Driver Details'}</Text>
                <Text className='font-semibold text-lg px-28 text-neutral-500'>{'Kwame Dansoh'}</Text>
            </View>
       
        </View>
        
        <ScrollView>
        <View 
        style={{backgroundColor:ThemeColors.bgColor(.2)}}className=' w-full  p-2'>
                    <View className='flex-row items-center justify-between'>
                        <View className='flex-row items-center justify-center'>
                                    <Image source={require('../assets/images/deliveryGuy.png')}
                                             className='rounded-full h-16 w-16 border-2 border-neutral-400'/>
                            <View>
                                        <Text className='font-bold text-white text-2xl px-5'>Kwame Dansoh</Text>
                                        <Text className='text-lg text-neutral-500 font- px-8 items-center justify-center'>Your Driver</Text>
                                      
                            </View>
                            <View className='ml-11'>
                            <Image source={require('../assets/images/bikeGuy2.gif')}
                            className='h-20  w-20'/>
                            </View>
                           
                        </View>
                  </View>
                
            </View>
            <Text>
                    Vehicle Details
                  </Text>

        </ScrollView>
        <View 
        style={{backgroundColor:ThemeColors.bgColor(.2)}}
        className='absolute z-45 bottom-0 p-1 w-full rounded-t-3xl'>
            <View className=' mb-5 p-2'>
                <View className='flex-row justify-between mb-3'>
                  <View className='flex-row justify-center items-center'>
                      <Image 
                        style={{shadowColor:ThemeColors.bgColor(1)}}
                      className='h-7 w-7 rounded-full'/>
                      <Text className='font-bold text-base'>Message</Text>
                  </View>
                    
                    <Text className='font-semibold text-base text-neutral-400'>+233509708732</Text>
                </View>
                <View className='flex-row justify-between mb-3'>
                    <View className='flex-row justify-center items-center h-6 w-14 ml-2'>
                        <Icon.Phone color={'white'} strokeWidth={1}
                        className='rounded-full h-16 w-16 border-2 border-neutral-400'/>
                        <Text className='font-bold'> Phone</Text>
                  </View>
                    
                    <Text className='font-semibold text-sm text-neutral-400'>+233552318815</Text>
                </View>
                {/* <View className='flex-row justify-between'>
                    <Text className='font-bold text-lg'>Order Total</Text>
                    <Text className='font-bold text-base text-neutral-950'>$100.78</Text>
                </View> */}
              
              
            </View>
            <TouchableOpacity 
            style={{backgroundColor:ThemeColors.bgColor(1)}}
            onPress={()=>navigation.push('Preparing')}
            className='rounded-full w-96 items-center justify-center bottom-0 p-3 '>
                    <Text className='text-2xl text-white font-extrabold'>Call Driver</Text>
                </TouchableOpacity>

        </View>
        
      
     
    </View>
  )
}

export default CallScreen
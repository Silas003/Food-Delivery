import { View, Text, Dimensions, ScrollView,Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
const { width, height } = Dimensions.get('window')

const FoodList = ({ data}) => {
    const navigation=useNavigation()
    const restaurant=data.restaurants

    return (
        
        <View className=' bg-neutral-100 pt-4  h-78'>
            <View className='flex-row justify-between'>
                <View className='px-4'>
                <Text className='font-bold text-4xl'>{data.title}</Text>
                <Text className='font-semibold text-1xl text-neutral-600'>{data.description}</Text>
                </View>
                <Text className='text-neutral-50 font-semibold'>See All</Text>
               
            </View>
            <ScrollView horizontal
            contentContainerStyle={{padding:5}}
            showsHorizontalScrollIndicator={false}
            className='mb-6'>
                
                {
                    restaurant.map(restaurant=>{
                        return(
                            <Pressable
                            key={restaurant.id} className='px-4'
                            onPress={()=>navigation.push('Restaurant',restaurant
                            
                        )}>
                            <Image  source={restaurant.image}
                            className='rounded-t-3xl h-36 w-60'/>
                             <View className='bg-white w-60 rounded-b-3xl h-30   shadow  shadow-orange-200 '>
                           <View className=''>
                                <Text className='font-bold text-2xl px-2  ml-3'>
                                    {restaurant.name}
                                 </Text>
                                 <Text className=' font-semibold text-base  px-2 space-x-3 ml-3'>
                                    <Text className='text-green-700'>{restaurant.stars}</Text>({restaurant.reviews}reviews)
                                 </Text>
                                 <Text className=' text-lg px-2 space-x-3 ml-3'>
                                    {restaurant.address}
                                 </Text>
                           </View>
                        </View>
                        </Pressable>
                       
                        )
                    })
                }
                   
                </ScrollView>
           
        </View>

    )
}

export default FoodList
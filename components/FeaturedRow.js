import { View, Text } from 'react-native'
import React from 'react'
import {ThemeColors} from '../theme/Index'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title,description,restaurants}) => {
  return (
    <View>
     <View className='flex-row justify-between items-center px-4'>
        <View>
            <Text className='font-bold text-lg'>{title}</Text>
            <Text className='text-gray-500 text-xs'>
                {description}
            </Text>
            </View>
            <TouchableOpacity>
                <Text style={{color:ThemeColors.text}} className='font-semibold'>See All</Text>
            </TouchableOpacity>
                
        </View>
        <ScrollView
        horizontal
        contentContainerStyle={{padding:20}}
        showsHorizontalScrollIndicator={false}
        className='overflow-visible py-4'>
            {
                restaurants.map((restaurant,index)=>{
                    return(
                        <RestaurantCard
                        item={restaurant}
                        key={index}/>
                    )
                })
            }

        </ScrollView>
    </View>
  )
}

export default FeaturedRow
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'
import {categories} from './index'


const {width,height}=Dimensions.get('window')

const FoodTypes = () => {
    useEffect(()=>{
        
    })
  return(
    <View className='mt-4'>
         <ScrollView
            horizontal
            className='overflow-visible'
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding:10}}>

        {
            categories.map((category,index)=>{
                return(
                    <View  
                    key={index} className=' items-center justify-center flex space-x-2 px-3'>
                        <TouchableOpacity
                        className='rounded-full shadow bg-gray-300'
                        >
                          <Image source={category.image}
                          className='rounded-full h-16 w-16'/>
                        
                        </TouchableOpacity>
                        <Text>{category.name.length>8 ? category.name.slice(0,10)+'...' :category.name}</Text>  
                    </View>
                )
            })
        }
    </ScrollView>
    </View>
   
  )
    }
export default FoodTypes
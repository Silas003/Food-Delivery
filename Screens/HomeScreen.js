import { View, Text, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import FoodTypes from '../components/FoodTypes'
import FoodList from '../components/FoodList'
import { featured } from '../components'
import FeaturedRow from '../components/FeaturedRow'
import {ThemeColors}from '../theme/Index'

const HomeScreen = () => {
    const[foodlist,setFoodlist]=useState([1,2,3,4,5,6,7,8,9,10])
    const navigation=useNavigation()
  return (
    <View className='flex-1   '>
        <View className='flex-row justify-between mt-9 items-center px-2 py-2'>
            <View className=' flex-row flex-1 border justify-between rounded-full items-center  border-gray-500  p-3 '>
                <Icon.Search height={25} width={25} stroke={'gray'}/>
                <TextInput placeholder='Restaurant' className='text-gray ml-2  flex-1 font-extrabold'/>
                <View className='flex-row border-l-2 border-gray-500  items-center'>
                <Icon.MapPin height={20} width={20}/>
                <TouchableOpacity>
                <Text className='font-semibold'>Ayeduase,KNUST</Text>
                </TouchableOpacity>
                
                </View> 
            </View>
            <TouchableWithoutFeedback 
            
            onPress={()=>navigation.push('Setting')}>
            <View 
            style={{backgroundColor:ThemeColors.bgColor(0.8)}}
            className=' rounded-3xl  p-3   items-center justify-center'>
            <Icon.Sliders height={20} width={20} strokeWidth={3} color={'white'}/>
            </View>
            </TouchableWithoutFeedback>
          
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}>
            {/* food types */}
        <FoodTypes />
       {/* food list */}
       <View className='mt-5'>
       {
          [featured,featured,featured].map((item,index)=>{

            return(
              <FeaturedRow
              key={index}
              title={item.title}
              restaurants={item.restaurants}
              description={item.description}/>
            )
          }

          )
          
          }
       
       </View>
      
       
       {/* <FoodList  title={'Hot and Spicy'}  description={'Local fast food corner'}  data={featured}/>
      <FoodList title='Fried Chicken' description={'soft and tender fried chicken'} data={featured}/> */}
        </ScrollView>
        
      
    </View>
  )
}

export default HomeScreen
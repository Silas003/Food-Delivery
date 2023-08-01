import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'
import CartB from './CartB'
import {DATA} from './index'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart, removeFromCart, selectItemsByid } from '../Slices/basketSlice'
const Menu = ({data}) => {
 
    const menu=data.dishes
    // const dispatch=useDispatch()
    // const totalItems=useSelector(state=>selectItemsByid(state,item.id))
    const [count,setCount]=useState(0)
    const add=()=>{
    //    dispatch(addToCart({...item}))
    // }
    }
    const minus=()=>{
        // dispatch(removeFromCart({id :item.id}))
    }
  return (
    <View>
        <Text className='font-bold text-4xl px-4'>Menu</Text>
     <View className=''>
        {
            data.map(item=>{
                return(
                    
                    <View   key={item.id}
                         className='flex-row p-3  mb-5 shadow-black bg-white'>
                        <Image source={require('../assets/images/pizza.png')}
                            className='rounded-3xl h-20 w-20'/>
                        <View className='px-2 justify-center'>
                            <Text className='text-lg font-bold'>{item.length>15? item.slice(0,14)+'...': item}</Text>
                            {/* <Text className='text-base text-neutral-500'>cheezy garlic pizza</Text> */}
                            <Text>$10</Text>
                        </View>
                           <View className='flex-row pt-14 pl-20 justify-evenly items-center '>
                                <TouchableOpacity
                                     onPress={minus}
                                     className='rounded-full bg-orange-500 items-center justify-center'>
                                    <Icon.Minus color={'white'}/>
                                </TouchableOpacity>
                                    <Text className='font-bold text-base px-3'>{36}</Text>
                                <TouchableOpacity 
                                        onPress={add}
                                         className='rounded-full bg-orange-500 items-center justify-center'>
                                         <Icon.Plus color={'white'}/>
                                </TouchableOpacity>
                             
                            </View>
                    </View>
                         

                    
                )
            })

            
        }
        
       
     </View>
    
    </View>
  )
}

export default Menu
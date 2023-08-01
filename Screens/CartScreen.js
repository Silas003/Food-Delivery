import { View, Text, TouchableOpacity, ScrollView ,Image} from 'react-native'
import React,{useEffect, useState} from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../components'
import { ThemeColors } from '../theme/Index'
import { useDispatch, useSelector } from 'react-redux'
import { selectResturant } from '../Slices/ResturantSlice'
import { selectBasketTotal,removeFromBasket, selectBasketItems} from '../Slices/basketSlice'



const CartScreen = () => {
    const [data,setData]=useState([1,2,3])
    const navigation=useNavigation()
    const restaurant=useSelector(selectResturant)
    const deliveryfee=5
    const basketItems = useSelector(selectBasketItems);
    const total=useSelector(selectBasketTotal)
    const[groupedItems,setGroupedItems]=useState({})
    const dispatch =useDispatch()
    const handleDecrease=()=>{
        dispatch(removeFromBasket({id : item.id}))
    }
    useEffect(()=>{
        const items=basketItems.reduce((group,item)=>{
            if(group[item.id]){
                group[item.id].push(item);
              }else{
                group[item.id] = [item];
              }
              return group;
            },{})
          setGroupedItems(items);
    },[cartItems])
    return (
    <View className='flex-1 bg-neutral-100'>
        <View className='flex-row p-2 mt-3 items-center '>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{backgroundColor:ThemeColors.bgColor(1)}}
                     className='rounded-full w-11 h-11 items-center  justify-center'>
                            <Icon.ArrowLeft color='white' />
                    </TouchableOpacity>
            <View>
                <Text className='font-extrabold text-2xl px-28'>Your Cart</Text>
                <Text className='font-semibold text-lg px-28 text-neutral-500'>{restaurant.name}</Text>
            </View>
       
        </View>
        <View style={{backgroundColor:ThemeColors.bgColor(0.1)}}
         className='flex-row p-1 items-center justify-between'>
           <Image source={require('../assets/images/bikeGuy.png')}
           className='h-20 w-20'/>
          <Text className='font-bold text-base'>Deliver in 20-30mins</Text>
          <Text style={{color:ThemeColors.bgColor(1)}} className=' font-bold'>Change</Text>
        </View>
        <ScrollView>
           {
            Object.entries(groupedItems).map(([key,items])=>{
                let item=items[0]
                return(
                    
                    <View
                    key={key} 
                    className='flex-row items-center  space-x-3 py-1 px-3  mb-3 bg-white  mt-2 rounded-full'>
                        <Text  style={{color:ThemeColors.bgColor(1)}}className='font-bold mr-3 '>{items.length} x</Text>
                        <Image source={item.image}
                        className='rounded-full h-20 w-20' />
                        <Text className='px-2 space-x-1 flex-1 text-base font-semibold'>{item.name}</Text>
                        <Text className=' font-bold  text-base'>${item.price}</Text>
                            <TouchableOpacity 
                            onPress={()=>dispatch(removeFromBasket({id :item.id}))}
                                className='p-1 rounded-full'
                                style={{backgroundColor:ThemeColors.text}}> 
                        <Icon.Minus stroke={'white'} strokeWidth={2}/>
                    </TouchableOpacity>
                        
                    </View>
                )
            })
           }

        </ScrollView>
        <View 
        style={{backgroundColor:ThemeColors.bgColor(0.2)}}
        className='absolute z-45 bottom-0  p-1 w-full rounded-t-3xl'>
            <View className=' mb-5 p-2'>
                <View className='flex-row justify-between mb-3'>
                    <Text className='font-semibold text-base'>SubTotal</Text>
                    <Text className='font-semibold text-base text-neutral-400'>${total}</Text>
                </View>
                <View className='flex-row justify-between mb-3'>
                    <Text className='font-semibold'>Delivery Fee</Text>
                    <Text className='font-semibold text-sm text-neutral-400'>{deliveryfee}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='font-bold text-lg'>Order Total</Text>
                    <Text className='font-bold text-base text-neutral-950'>{total+deliveryfee}</Text>
                </View>
              
              
            </View>
            <View className='pb-2'>
            <TouchableOpacity 
            style={{backgroundColor:ThemeColors.bgColor(0.8)}}
            onPress={()=>navigation.push('Preparing')}
            className='rounded-full items-center justify-center bottom-0 p-4 '>
                    <Text className='text-2xl text-white font-extrabold '>Place Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default CartScreen
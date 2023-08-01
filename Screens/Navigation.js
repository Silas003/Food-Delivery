import { View, Text, Modal } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
import RestaurantScreen from './RestaurantScreen'
import CartScreen from './CartScreen'
import PreparingScreen from './PreparingScreen'
import DeliveryScreen from './DeliveryScreen'
import Cancelled from './Cancelled'
import CallScreen from './CallScreen'

const Navigation = () => {
    const Stack=createStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Setting' component={SettingScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Restaurant' component={RestaurantScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Cart' component={CartScreen} options={{presentation:'modal',headerShown:false}}/>
            <Stack.Screen name='Preparing' component={PreparingScreen} options={{presentation:'card',headerShown:false}}/>
            <Stack.Screen name='Delivery' component={DeliveryScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Cancelled' component={Cancelled} options={{headerShown:false}}/>
            <Stack.Screen name='Call' component={CallScreen} options={{presentation:'modal',headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
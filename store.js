import { configureStore } from '@reduxjs/toolkit'
import  basketSlice  from './Slices/basketSlice'
import RestaurantSlice from './Slices/ResturantSlice'



export const Store=configureStore({
   reducer:{
      basket:basketSlice,
      resturant:RestaurantSlice
   },

}) 
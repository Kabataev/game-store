import {configureStore} from '@reduxjs/toolkit'
import cartReucer from './cart/reducer'

export const store = configureStore({
  reducer:{
    cart:cartReucer
  },
})
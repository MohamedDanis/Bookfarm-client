import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        auth:userSlice,
        carts:cartSlice
    }
})

export default store
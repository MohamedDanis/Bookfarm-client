import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        products:[],
        quantity: 0,
        
    },
    reducers:{
        setItems:(state,action)=>{
            state.products = action.payload
            state.quantity = state.products.length
        }
    }
})
export const {setItems} = cartSlice.actions
export default cartSlice.reducer
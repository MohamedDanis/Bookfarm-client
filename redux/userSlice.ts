import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        isAuthenticated:false,
        isAdmin:false
    },
    reducers:{
        setAdmin: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isAdmin=true
          },
          resetAdmin: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isAdmin = false
          },
          setUser: (state,action) =>{
            state.user = action.payload;
            state.isAuthenticated = true
          },
          resetUser:(state)=>{
            state.user=null;
            state.isAuthenticated=false
          }
    }
})

export const {setAdmin,resetAdmin,setUser,resetUser}=userSlice.actions

export default userSlice.reducer
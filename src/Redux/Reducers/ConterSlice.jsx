import { createSlice } from "@reduxjs/toolkit";


const initialState = 0 ;

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action={payload:1})=>{
            state+=action.payload;
        },
        decrement:(state, action= { payload:1})=>{
            state-=action.payload;
        }
    }
})

export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;
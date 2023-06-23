import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./Reducers/ConterSlice";

const Store = configureStore({
    reducer:{
        counter:counterSlice
    }
})

export default Store ;
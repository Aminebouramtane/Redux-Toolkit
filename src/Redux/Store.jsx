import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Reducers/ConterSlice"

export const Store = configureStore({
    reducer:{
        counter:counterSlice,
    },
});
// export type RootState = ReturnType<typeof store.getState>;
export default Store ;
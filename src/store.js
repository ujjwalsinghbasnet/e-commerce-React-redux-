import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import productReducer from './features/productsSlice'
import userSlice from "./features/userSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
        user: userSlice
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import whishlistSlice from "./Slice/whishlistSlice";
import cartSlice from "./Slice/cartSlice";
const store = configureStore({
    reducer:{
        wishlistReducer:whishlistSlice,
        cartReducer:cartSlice
    }
})
export default store
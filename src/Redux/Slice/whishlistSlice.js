import { createSlice } from "@reduxjs/toolkit";
import Wishlist from "../../Pages/Wishlist";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:((state,action)=>{
            state.push(action.payload)
        }),
        deleteFromWishlist:((state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        })
    }
})
export const {addToWishlist,deleteFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer
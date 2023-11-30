import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "../features/cartSlice"

// cart store
export const store =configureStore({
    reducer:{
        allCart:cartSlice
    }
})
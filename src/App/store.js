import {configureStore} from '@reduxjs/toolkit'
import imageSlice from '../featurs/imageSlice'

export const store=configureStore({
    reducer:{
        images:imageSlice
    }
})
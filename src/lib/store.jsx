import { configureStore } from '@reduxjs/toolkit'
import { searchreducer } from './search'

export let store = configureStore({
    reducer:{
        "search" : searchreducer
    }
})
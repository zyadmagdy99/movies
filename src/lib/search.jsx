import { createSlice } from "@reduxjs/toolkit";
let initialState = {search : ""}
let searchslice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setsearch:(state,action) =>{
            state.search = action.payload
        }
    }
})

export let searchreducer = searchslice.reducer
export let {setsearch} = searchslice.actions
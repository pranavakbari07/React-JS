import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { build } from "vite";

export const fetchData = createAsyncThunk("api",async()=>{
    let redponse = await axios.get("https://fakestoreapi.com/products")
    return redponse.data;
})

export const api = createSlice({
    name:"api",
    initialState : {record : [],loading : true},

    reducers:{},
    extraReducers : (builder=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.record = [];
            state.loading = true;
        }),
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.record = action.payload;
            state.loading = false;
        })

    })
})

export default api.reducer;
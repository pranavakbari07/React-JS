import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
    const response = await axios.get("http://localhost:5000/data")
    return response.data
})

export const api = createSlice({
    name: "api",
    initialState: { record: [], loading: true },
    reducers: {},
    extraReducers: (builder => {
        // Fetch Data
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.record = action.payload
            state.loading = false
        })
    })
})

export default api.reducer
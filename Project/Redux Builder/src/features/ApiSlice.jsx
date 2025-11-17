import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
    const response = await axios.get("http://localhost:5000/data")
    return response.data
})

export const addData = createAsyncThunk("api/addData", async (newData) => {
    const response = await axios.post("http://localhost:5000/data", newData)
    return response.data
})

export const deleteData = createAsyncThunk("api/deleteData", async (id) => {
    await axios.delete(`http://localhost:5000/data/${id}`)
    return id
})

export const updateData = createAsyncThunk("api/updateData", async ({ editIndex, formdata }) => {
    const response = await axios.put(`http://localhost:5000/data/${editIndex}`, formdata)
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
        // Add Data
        builder.addCase(addData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addData.fulfilled, (state, action) => {
            state.record.push(action.payload)
            state.loading = false
        })
        // Delete Data
        builder.addCase(deleteData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.record = state.record.filter(item => String(item.id) !== String(action.payload))
            state.loading = false
        })
        // Update Data
        builder.addCase(updateData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateData.fulfilled, (state, action) => {
            let singleData = state.record.find((item) => item.id == action.payload.id);
            if (singleData) {
                singleData.name = action.payload.name;
                singleData.age = action.payload.age;
                singleData.city = action.payload.city;
                singleData.subject = action.payload.subject;
                singleData.gender = action.payload.gender;
            }
            state.loading = false
        })

    })
})

export default api.reducer
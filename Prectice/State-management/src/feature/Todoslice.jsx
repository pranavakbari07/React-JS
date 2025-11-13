import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name: "todo",
    initialState: {record : []},
    reducers: {
        addData : (state, action) => {
            state.record.push(action.payload);
        },
        deleteData : (state, action) => {
            state.record = state.record.filter((e)=> e.id !== action.payload)
        },
        updateData : (state, action) => {
            let singleData = state.record.find((e)=> e.id === action.payload.id)
            singleData.name = action.payload.data.name
            singleData.age = action.payload.data.age
            singleData.city = action.payload.data.city
        }
    }
})

export default todo.reducer;
export const { addData, deleteData, updateData } = todo.actions;
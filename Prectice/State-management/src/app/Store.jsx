import { configureStore } from "@reduxjs/toolkit";
import  Counter from "../feature/CounterSlice";

export const store = configureStore({
    reducer: {
        CounterKey : Counter
    },
})
import { configureStore } from "@reduxjs/toolkit";
import api from "../features/ApiSlice.jsx";

export const store = configureStore({
    reducer : {
        ApiKey : api
    }
})
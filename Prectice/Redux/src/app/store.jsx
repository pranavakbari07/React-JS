import { configureStore } from "@reduxjs/toolkit";
import Counter from "../feature/CounterSlice";
import todo from "../feature/TodoSlice";
import api from "../feature/ApiSlice";

export const store = configureStore({
  reducer : {
    CounterKey : Counter,
    TodoKey : todo,
    ApiKey : api
  }
})
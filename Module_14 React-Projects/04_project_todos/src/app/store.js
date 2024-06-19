import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/Todoslice/todoSlice";

export const store = configureStore({
    reducer : {
        // counter 
        counter : counterReducer,
        // todos app
        todos:todoReducer,
    },
})
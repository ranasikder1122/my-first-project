import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";

const Store =configureStore({
    reducer:{
        todos: todoReducer
    }
});
export default Store;
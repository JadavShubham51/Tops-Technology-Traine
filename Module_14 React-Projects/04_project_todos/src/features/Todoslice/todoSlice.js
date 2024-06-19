import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos:[]
};

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        // add karva
        addTodo:(state,action)=>{
            state.todos.push(action.payload);
        },
        // toggle kari sakay finde karva
        toggleComplete:(state,action)=>{
            const todo = state.todos.find(todo=>todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        // remove karva
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id !== action.payload);
        }
    }
});

export const {addTodo,toggleComplete,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
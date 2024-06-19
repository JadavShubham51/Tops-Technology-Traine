import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

// promise pending,fullfield,reject handel karna padata he

// creted funtion
export const createUser = createAsyncThunk(
    "createUser",
    async(data,{ rejectWithValue})=>{
        const res = await axios.post(`http://localhost:3000/users`,data)
        try {
            const respos = await res.data;
            return respos
        }
        catch(error){
            return rejectWithValue(error.respos)
        }
    }
)

export const userDetails= createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{
        // Define your reducers using the builder callback
        userPending :(state)=>{
            state.loading = true;
        },
        userFullfilled : (state,action)=>{
            state.loading = false;
            // Append new User to the user array
            state.users.push(action.payload);
        },
        userRejected:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    },
    // use extrReducers field directly
    extraReducers:(builder)=>{
        builder
        // add data by post
        .addCase(createUser.pending,(state)=>{
            state.loading= true;
        })
        .addCase(createUser.fulfilled, (state,action) =>{
            state.loading = false;
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

    },
})

export const{userPending, userFullfilled, userRejected} = userDetails.actions;

export default userDetails.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: false,
    error: null,
    success: false
  }

  export const uploadExpense=createAsyncThunk('uploadexpense/uploadExpense',
    async(input)=>{
        const res=await axios.post('http://localhost:5000/addtransaction',input)
        console.log(res.data);
        const data=res.data;
        return data;
    }
  )

export const uploadExpenseSlice=createSlice({
    name :'uploadexpense',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(uploadExpense.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(uploadExpense.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
            state.success=true
            console.log("action.payload",action.payload)
        })
        .addCase(uploadExpense.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
    }
})
export default uploadExpenseSlice.reducer
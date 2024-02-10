import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: false,
    error: null,
    success: false
  }

  export const uploadCategory=createAsyncThunk('uploadcate/uploadCate',
    async(input)=>{
        console.log("input",input)
        const res=await axios.post('http://localhost:5000/category',{data:input})
        console.log(res.data);
        const data=res.data;
        return data;
    }
  )

export const uploadCategorySlice=createSlice({
    name :'uploadcate',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(uploadCategory.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(uploadCategory.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contents=action.payload
            state.success=true
            console.log("action.payload",action.payload)
        })
        .addCase(uploadCategory.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
    }
})
export default uploadCategorySlice.reducer
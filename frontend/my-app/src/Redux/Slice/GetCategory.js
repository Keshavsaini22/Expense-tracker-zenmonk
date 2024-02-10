import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: false,
    error: null,
    success: false
}

export const getCategory = createAsyncThunk('getcate/getCate',
    async()=>{
        console.log("helloooo")
        const res=await axios.get('http://localhost:5000/category')
        const data=res.data
        // console.log("data in cat fxn",data)
        return data
    })

export const getCategorySlice = createSlice({
    name: 'getcate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state) => {
            state.isLoading = true
        })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.contents = action.payload
                state.success = true
                console.log("action.payload", action.payload)
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})
export default getCategorySlice.reducer
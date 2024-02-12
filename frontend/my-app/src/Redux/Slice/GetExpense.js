import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: false,
    error: null,
    success: false
}

export const getExpenses = createAsyncThunk('getexpense/getExpense',
    async()=>{
        console.log("helloooo")
        const res=await axios.get('http://localhost:5000/expenses')
        const data=res.data
        // console.log("data in cat fxn",data)
        return data
    })

export const getExpenseSlice = createSlice({
    name: 'getexpense',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getExpenses.pending, (state) => {
            state.isLoading = true
        })
            .addCase(getExpenses.fulfilled, (state, action) => {
                state.isLoading = false
                state.contents = action.payload
                state.success = true
                console.log("action.payload", action.payload)
            })
            .addCase(getExpenses.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})
export default getExpenseSlice.reducer
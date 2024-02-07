import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    loading: false,
    error: null,
    msg: "",
    user: "",
    success:false
}

export const signUpUser = createAsyncThunk('signupuser',
    async (data, { rejectWithValue }) => {
        try {
            console.log("SIGNUPUSERTHUNK",data)
            const response = await axios.post('http://localhost:5000/signin', data);
            console.log(response.data)
            return response.data
        } catch (e) {
            return rejectWithValue(e.messsage)
        }
    }
)

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state, action) => {
                state.loading = true
                state.error = null
                state.success=false;                
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false
                console.log("action payload",action.payload)
                state.user = action.payload
                state.success=true
                console.log(state.success)

            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.success=false;
            })

    },
})
export default signupSlice.reducer
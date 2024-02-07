import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    loading: false,
    error: null,
    msg: "",
    user: null,
    success: false
}

export const loginUser = createAsyncThunk('login/loginuser',
    async (inpval, { rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:5000/login', inpval);
            console.log("response", res.data);
            return res.data

        } catch (e) {
            return rejectWithValue(e.messsage)
        }
    }
)

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true
                state.error = null
                state.success = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false
                state.error = null
                state.success = true;
                state.user = action.payload.user
                state.msg = action.payload.msg
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action.payload)

                state.loading = false
                state.error = action.payload
                state.success = false;
            })
    },
})
export default loginSlice.reducer
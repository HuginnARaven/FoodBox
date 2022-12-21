import {createSlice} from '@reduxjs/toolkit'
import {login, register} from "./authAction";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isLoading: false,
        error: null
    },
    reducers: {
        SetToken: (state, action) => {
            state.token = action.payload;
        },
        SetAuthError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            state.error = null
        });
        builder.addCase(login.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null
        });
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
            state.error = null
        });
        builder.addCase(register.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null
        });
        builder.addCase(register.rejected, (state) => {
            state.isLoading = false;
        });
    }
})

export const {SetToken, SetAuthError, auth} = authSlice.actions

export default authSlice.reducer
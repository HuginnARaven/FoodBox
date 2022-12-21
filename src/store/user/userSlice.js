import {createSlice} from '@reduxjs/toolkit'
import {getUser, login} from "./userAction";
import {logout} from "../auth/authAction";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        role: '',
        name: '',
        description: '',
        address: '',
        is_authorized: false,
        errorMsg: null,
    },
    reducers: {
        SetError: (state, action) => {
            state.errorMsg = action.payload
        },
        SetUser: (state, action) => {
            state.username = action.payload.username || ''
            state.email = action.payload.email || ''
            state.role = action.payload.role || ''
            state.description = action.payload.description || ''
            state.name = action.payload.name || ''
            state.address = action.payload.address || ''
            state.is_authorized = true;
        },
    },
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.username = action.payload.username || ''
            state.email = action.payload.email || ''
            state.role = action.payload.role || ''
            state.description = action.payload.description || ''
            state.name = action.payload.name || ''
            state.address = action.payload.address || ''
            state.is_authorized = true;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.username = ''
            state.email = ''
            state.role = ''
            state.description = ''
            state.name = ''
            state.address = ''
            state.is_authorized = false;
        });
    }
})

export const {SetUser, SetError} = userSlice.actions

export default userSlice.reducer
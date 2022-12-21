import {createAsyncThunk} from "@reduxjs/toolkit";
import {userAPI} from "../../utils/api";
import {SetAuthError, SetToken} from "./authSlice";
import {SetError, SetUser} from "../user/userSlice";


export const login = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {

            const {username, password} = userData

            const resLogin = await userAPI.login({username, password}); // db request

            // localStorage.setItem('access_token', JSON.stringify(resLogin.token))
            localStorage.setItem('access_token', resLogin.token)
            const profileData = await userAPI.getMe((resLogin.token));

            thunkAPI.dispatch(SetToken(resLogin.token))

            thunkAPI.dispatch(SetUser(profileData))

            return resLogin
        } catch (err) {
            let error = err // cast the error for access

            if (!error.response) {
                throw error
            }

            const errorMsg = error.response.data
            thunkAPI.dispatch(SetAuthError(errorMsg.non_field_errors[0]))
            const json = JSON.stringify(errorMsg)
            console.log(errorMsg)
            return thunkAPI.rejectWithValue(json)
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const {username, email, password, password2, name, description, role, address} = userData
            console.log(userData)
            const resRegister = role==="C" ?
                await userAPI.registerCompany({
                    username,
                    email,
                    password,
                    password2,
                    name,
                    description,
                    role}) : (role==="S") ?
                await userAPI.registerSupplier({
                    username,
                    email,
                    password,
                    password2,
                    name,
                    description,
                    role,
                    address}) : null;



            localStorage.setItem('access_token', resRegister.token)

            const profileData = await userAPI.getMe((resRegister.token));

            thunkAPI.dispatch(SetUser(profileData))

            return resRegister
        } catch (err) {
            let error = err // cast the error for access

            if (!error.response) {
                throw error
            }

            const errorMsg = error.response.data
            const json = JSON.stringify(errorMsg)
            return thunkAPI.rejectWithValue(json)
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (thunkAPI) => {
        try {

            // const token = localStorage.getItem('access_token');
            // const res = await userAPI.logout((token));

            localStorage.removeItem('access_token');

            // return res
        } catch (err) {
            let error = err // cast the error for access

            if (!error.response) {
                throw error
            }

            const errorMsg = error.response.data
            thunkAPI.dispatch(SetError(errorMsg.non_field_errors[0]))
            const json = JSON.stringify(errorMsg)
            return thunkAPI.rejectWithValue(json)
        }
    }
)
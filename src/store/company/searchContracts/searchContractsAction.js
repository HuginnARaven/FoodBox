import {createAsyncThunk} from "@reduxjs/toolkit";
import {companyAPI} from "../../../utils/api";
import {SendSearch, SetSearch} from "./searchContractsSlice";


export const searchSupp = createAsyncThunk(
    'search/supplier/info',
    async ( token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const suppInfo = await companyAPI.getSuppSearch(token);
            thunkAPI.dispatch(SetSearch(suppInfo))

            return suppInfo
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
)

export const createContact = createAsyncThunk(
    'search/set/have_contract',
    async (suppId, thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const resContractRequest = await companyAPI.createContractRequest(suppId, token);

            thunkAPI.dispatch(SendSearch((suppId)))

            return resContractRequest
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
)
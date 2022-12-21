import {createAsyncThunk} from "@reduxjs/toolkit";
import {companyAPI} from "../../../utils/api";
import {DeleteContract, SetContracts} from "./contractsSlice";


export const getContacts = createAsyncThunk(
    'contract/get-all',
    async (token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const companyContracts = await companyAPI.getCompanyContracts((token));
            thunkAPI.dispatch(SetContracts(companyContracts))

            return companyContracts
        } catch (err) {
            let error = err // cast the error for access

            if (!error.response) {
                throw error
            }

            const errorMsg = error.response.data
            //thunkAPI.dispatch(SetError(errorMsg.non_field_errors[0]))
            const json = JSON.stringify(errorMsg)
            return thunkAPI.rejectWithValue(json)
        }
    }
)

export const getSuppInfo = createAsyncThunk(
    'search/supplier/info',
    async (sppId,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const suppInfo = await companyAPI.getSuppInfo(sppId, token);

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

export const deleteContact = createAsyncThunk(
    'contract/delete',
    async (contractId, thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const resRegister = await companyAPI.deleteCompanyContract(contractId, token);

            thunkAPI.dispatch(DeleteContract((contractId)))

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
)
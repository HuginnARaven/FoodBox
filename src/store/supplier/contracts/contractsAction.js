import {createAsyncThunk} from "@reduxjs/toolkit";
import {supplierAPI} from "../../../utils/api";
import {AcceptSupplierContract, DeleteSupplierContract, SetSupplierContracts} from "./contractsSlice";


export const getSupplierContacts = createAsyncThunk(
    'contract/get-all',
    async (token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const supplierContracts = await supplierAPI.getSupplierContracts((token));
            thunkAPI.dispatch(SetSupplierContracts(supplierContracts))

            return supplierContracts
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

export const acceptSupplierContact = createAsyncThunk(
    'contract/create',
    async (contractId, thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const resContractRequest = await supplierAPI.acceptSupplierContract(contractId, token);

            thunkAPI.dispatch(AcceptSupplierContract(contractId))

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

export const deleteSupplierContact = createAsyncThunk(
    'contract/delete',
    async (contractId, thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const resRegister = await supplierAPI.deleteSupplierContract(contractId, token);

            thunkAPI.dispatch(DeleteSupplierContract(contractId))

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
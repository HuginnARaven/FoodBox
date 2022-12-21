import {createAsyncThunk} from "@reduxjs/toolkit";
import {companyAPI, supplierAPI} from "../../../utils/api";
import {AddWorker, DeleteWorker, EditWorker, SetWorkers} from "./workersSlice";
import {EditCourier, SetCouriers} from "../../supplier/courieres/couriersSlice";


export const getWorkers = createAsyncThunk(
    'worker/get-all',
    async (token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const companyWorkers = await companyAPI.getCompanyWorkers((token));
            thunkAPI.dispatch(SetWorkers(companyWorkers))

            return companyWorkers
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


export const editWorker = createAsyncThunk(
    'worker/edit',
    async (workerData, thunkAPI) => {
        try {
            const {id, first_name, last_name, rfid} = workerData

            const reqbody = {
                first_name: first_name,
                last_name: last_name,
                rfid: rfid
            }

            const editedWorkerData = await companyAPI.editCompanyWorker(id , reqbody);
            thunkAPI.dispatch(EditWorker((editedWorkerData)))

            return editedWorkerData
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

export const createWorker = createAsyncThunk(
    'worker/create',
    async (workerData, thunkAPI) => {
        try {
            const {username, email, password, password2, first_name, last_name} = workerData
            console.log(workerData)
            const resRegister = await companyAPI.createCompanyWorker({username, email, password, password2, first_name, last_name});

            //thunkAPI.dispatch(AddWorker(resRegister))

            const token = localStorage.getItem('access_token')
            const supplierCouriers = await companyAPI.getCompanyWorkers((token));
            thunkAPI.dispatch(SetWorkers(supplierCouriers))

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

export const deleteWorker = createAsyncThunk(
    'worker/delete',
    async (workerId, thunkAPI) => {
        try {

            const worker = {
                id : workerId
            }
            const resDelete = await companyAPI.deleteCompanyWorker(workerId);
            thunkAPI.dispatch(DeleteWorker((worker)))

            return resDelete
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
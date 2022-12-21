import {createAsyncThunk} from "@reduxjs/toolkit";
import {companyAPI} from "../../../utils/api";
import {AddBoxWorker, DeleteBoxWorker, DisableBox, SetBoxes} from "./boxesSlice";


export const getBoxes = createAsyncThunk(
    'boxes/get-all',
    async (token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const companyBoxes = await companyAPI.getCompanyBoxes((token));
            thunkAPI.dispatch(SetBoxes(companyBoxes))

            return companyBoxes
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

export const createBox = createAsyncThunk(
    'box/create',
    async (address, thunkAPI) => {
        try {
            const reqbody = {address: address}
            const token = localStorage.getItem('access_token')
            const resRequest = await companyAPI.createCompanyBox(reqbody, token);

            const companyBoxes = await companyAPI.getCompanyBoxes((token));
            thunkAPI.dispatch(SetBoxes(companyBoxes))

            return resRequest
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

export const disableBox = createAsyncThunk(
    'box/delete',
    async (boxId, thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const resRegister = await companyAPI.disableCompanyBox(boxId, token);

            thunkAPI.dispatch(DisableBox(boxId))

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

export const deleteBoxWorker = createAsyncThunk(
    'box/worker/delete',
    async (Ids, thunkAPI) => {
        try {
            const {boxId, dataId} = Ids

            const BoxWorker = {
                id : dataId,
                box_id: boxId
            }
            const token = localStorage.getItem('access_token')
            const resDelete = await companyAPI.deleteBoxWorker(boxId, dataId, token);
            thunkAPI.dispatch(DeleteBoxWorker((BoxWorker)))

            return resDelete
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

export const addBoxWorker = createAsyncThunk(
    'box/worker/add',
    async (data, thunkAPI) => {
        try {
            const {boxId, worker} = data

            const token = localStorage.getItem('access_token')
            const boxWorkersData = await companyAPI.addBoxWorker(boxId, {worker: Number(worker)}, token);
            thunkAPI.dispatch(AddBoxWorker((boxWorkersData)))

            return boxWorkersData
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
import {createAsyncThunk} from "@reduxjs/toolkit";
import {supplierAPI} from "../../../utils/api";
import {DeleteCourier, EditCourier, SetCouriers} from "./couriersSlice";


export const getCouriers = createAsyncThunk(
    'courier/get-all',
    async (token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const supplierCouriers = await supplierAPI.getSupplierCouriers((token));
            thunkAPI.dispatch(SetCouriers(supplierCouriers))

            return supplierCouriers
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


export const editCourier = createAsyncThunk(
    'courier/edit',
    async (workerData, thunkAPI) => {
        try {
            const {id, first_name, last_name, rfid} = workerData

            const reqbody = {
                first_name: first_name,
                last_name: last_name,
                rfid: rfid
            }
            const editedCourierData = await supplierAPI.editSupplierCourier(id , reqbody);
            thunkAPI.dispatch(EditCourier((editedCourierData)))

            return editedCourierData
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

export const createCourier = createAsyncThunk(
    'courier/create',
    async (courierData, thunkAPI) => {
        try {
            const {username, email, password, password2, first_name, last_name} = courierData
            const resRegister = await supplierAPI.createSupplierCourier({username, email, password, password2, first_name, last_name});

            const token = localStorage.getItem('access_token')
            const supplierCouriers = await supplierAPI.getSupplierCouriers((token));
            thunkAPI.dispatch(SetCouriers(supplierCouriers))

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

export const deleteCourier = createAsyncThunk(
    'courier/delete',
    async (courierId, thunkAPI) => {
        try {

            const courier = {
                id : courierId
            }
            const resDelete = await supplierAPI.deleteSupplierCourier(courierId);
            thunkAPI.dispatch(DeleteCourier((courier)))

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
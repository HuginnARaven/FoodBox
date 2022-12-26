import {createAsyncThunk} from "@reduxjs/toolkit";
import {supplierAPI} from "../../../utils/api";
import {AcceptOffer, DeclineOffer, SetOffers} from "./offersSlice";


export const getOffers = createAsyncThunk(
    'menu/get-all',
    async (token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const supplierMenus = await supplierAPI.getSupplierOffers((token));
            thunkAPI.dispatch(SetOffers(supplierMenus))

            return supplierMenus
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


export const acceptOffer = createAsyncThunk(
    'menu/edit',
    async (offerData, thunkAPI) => {
        try {
            const {offerId, courierId} = offerData

            const editedMenuData = await supplierAPI.acceptSupplierOffer(offerId , courierId);
            thunkAPI.dispatch(AcceptOffer((editedMenuData)))

            return editedMenuData
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

export const declineOffer = createAsyncThunk(
    'courier/delete',
    async (offerId, thunkAPI) => {
        try {

            const resDelete = await supplierAPI.declineSupplierOffer(offerId);
            thunkAPI.dispatch(DeclineOffer((offerId)))

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


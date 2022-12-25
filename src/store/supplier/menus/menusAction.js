import {createAsyncThunk} from "@reduxjs/toolkit";
import {supplierAPI} from "../../../utils/api";
import {
    AddMenu,
    AddMenuProduct,
    DeleteMenu,
    DeleteMenuProduct,
    EditMenu,
    EditMenuProduct,
    SetMenus
} from "./menusSlice";


export const getMenus = createAsyncThunk(
    'menu/get-all',
    async (token,thunkAPI) => {
        try {
            const token = localStorage.getItem('access_token')
            const supplierMenus = await supplierAPI.getSupplierMenus((token));
            thunkAPI.dispatch(SetMenus(supplierMenus))

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


export const editMenu = createAsyncThunk(
    'menu/edit',
    async (menuData, thunkAPI) => {
        try {
            const {id, name, description} = menuData

            const requestBody = {
                name: name,
                description: description,
            }

            const editedMenuData = await supplierAPI.editSupplierMenu(id , requestBody);
            thunkAPI.dispatch(EditMenu((editedMenuData)))

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

export const createMenu = createAsyncThunk(
    'courier/create',
    async (menuData, thunkAPI) => {
        try {
            const {name, description} = menuData

            const requestBody = {
                name: name,
                description: description,
            }
            const resCreate = await supplierAPI.createSupplierMenu((requestBody));
            thunkAPI.dispatch(AddMenu((resCreate)))

            return resCreate
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

export const deleteMenu = createAsyncThunk(
    'courier/delete',
    async (menuId, thunkAPI) => {
        try {

            const requestBody = {
                id : menuId
            }
            const resDelete = await supplierAPI.deleteSupplierMenu(menuId);
            thunkAPI.dispatch(DeleteMenu((requestBody)))

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

export const createMenuProduct = createAsyncThunk(
    'product/create',
    async (productData, thunkAPI) => {
        try {
            const {menu_id, name, description, picture} = productData

            const requestBody = {
                name: name,
                description: description,
                picture: picture
            }

            const editedProductData = await supplierAPI.createSupplierMenuProduct(menu_id, requestBody);
            thunkAPI.dispatch(AddMenuProduct((editedProductData)))

            return editedProductData
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

export const editMenuProduct = createAsyncThunk(
    'product/create',
    async (productData, thunkAPI) => {
        try {
            const {id, name, description, picture} = productData

            const requestBody = {
                name: name,
                description: description,
                picture: picture
            }

            const editedProductData = await supplierAPI.editSupplierMenuProduct(id, requestBody);
            thunkAPI.dispatch(EditMenuProduct((editedProductData)))

            return editedProductData
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

export const deleteMenuProduct = createAsyncThunk(
    'product/create',
    async (productData, thunkAPI) => {
        try {
            const {product_id, menu_id} = productData
            const deleteProductData = await supplierAPI.deleteSupplierMenuProduct(product_id);
            thunkAPI.dispatch(DeleteMenuProduct((productData)))

            return deleteProductData
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
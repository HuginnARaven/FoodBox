import {createSlice} from '@reduxjs/toolkit'
import {getMenus} from "./menusAction";


export const menusSlice = createSlice({
    name: 'menus',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetMenus: (state, action) => {
            state.list = action.payload || []
        },
        EditMenu: (state, action) => {
            const indexOfCourier = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list[indexOfCourier] = action.payload;
        },
        EditMenuProduct: (state, action) => {
            const indexOfMenu = state.list.findIndex(object => {
                return object.id === action.payload.menu_id;
            });
            const indexOfProduct = state.list[indexOfMenu].products.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list[indexOfMenu].products[indexOfProduct] = action.payload
        },
        AddMenuProduct: (state, action) => {
            const indexOfMenu = state.list.findIndex(object => {
                return object.id === action.payload.menu_id;
            });
            state.list[indexOfMenu].products.push(action.payload)
        },
        DeleteMenuProduct: (state, action) => {
            const indexOfMenu = state.list.findIndex(object => {
                return object.id === action.payload.menu_id;
            });
            const indexOfProduct = state.list[indexOfMenu].products.findIndex(object => {
                return object.id === action.payload.product_id;
            });
            state.list[indexOfMenu].products.splice(indexOfProduct, 1);
        },
        AddMenu: (state, action) => {
            state.list.push(action.payload)
        },
        DeleteMenu: (state, action) => {
            const indexOfMenu = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list.splice(indexOfMenu, 1);
        },
    },
    extraReducers: builder => {
        builder.addCase(getMenus.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(getMenus.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(getMenus.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetMenus, EditMenu, AddMenu, DeleteMenu, EditMenuProduct, AddMenuProduct, DeleteMenuProduct} = menusSlice.actions

export default menusSlice.reducer
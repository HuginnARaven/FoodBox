import {createSlice} from '@reduxjs/toolkit'
import {createCourier, getCouriers} from "./couriersAction";


export const couriersSlice = createSlice({
    name: 'couriers',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetCouriers: (state, action) => {
            state.list = action.payload || []
        },
        EditCourier: (state, action) => {
            const indexOfCourier = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list[indexOfCourier] = action.payload;
        },
        AddCourier: (state, action) => {
            state.list.push(action.payload)
        },
        DeleteCourier: (state, action) => {
            const indexOfCourier = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list.splice(indexOfCourier, 1);
        },
    },
    extraReducers: builder => {
        builder.addCase(getCouriers.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(getCouriers.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(getCouriers.rejected, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(createCourier.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(createCourier.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(createCourier.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetCouriers, AddCourier, DeleteCourier, EditCourier} = couriersSlice.actions

export default couriersSlice.reducer
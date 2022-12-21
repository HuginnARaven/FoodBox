import {createSlice} from '@reduxjs/toolkit'
import {getBoxes} from "./boxesAction";


export const boxesSlice = createSlice({
    name: 'boxes',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetBoxes: (state, action) => {
            state.list = action.payload || []
        },
        AddBox: (state, action) => {
            state.list.push(action.payload)
        },
        DisableBox: (state, action) => {
            const indexOfBox = state.list.findIndex(object => {
                return object.id === action.payload;
            });
            state.list[indexOfBox].is_active = false
        },
        DeleteBoxWorker: (state, action) => {
            const indexOfBox = state.list.findIndex(object => {
                return object.id === action.payload.box_id;
            });
            const indexOfAllowedWorker = state.list[indexOfBox].workers.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list[indexOfBox].workers.splice(indexOfAllowedWorker, 1);
        },
        AddBoxWorker: (state, action) => {
            const indexOfMenu = state.list.findIndex(object => {
                return object.id === action.payload.box_id;
            });
            state.list[indexOfMenu].workers.push(action.payload)
        },
    },
    extraReducers: builder => {
        builder.addCase(getBoxes.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(getBoxes.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(getBoxes.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetBoxes, DisableBox, AddBoxWorker, DeleteBoxWorker} = boxesSlice.actions

export default boxesSlice.reducer
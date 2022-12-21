import {createSlice} from '@reduxjs/toolkit'
import {createWorker, getWorkers} from "./workersAction";


export const workersSlice = createSlice({
    name: 'workers',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetWorkers: (state, action) => {
            state.list = action.payload || []
        },
        AddWorker: (state, action) => {
            state.list.push(action.payload)
        },
        EditWorker: (state, action) => {
            const indexOfWorker = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list[indexOfWorker] = action.payload;
        },
        DeleteWorker: (state, action) => {
            const indexOfWorker = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list.splice(indexOfWorker, 1);
        },
    },
    extraReducers: builder => {
        builder.addCase(getWorkers.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(getWorkers.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(getWorkers.rejected, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(createWorker.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(createWorker.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(createWorker.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetWorkers, AddWorker, DeleteWorker, EditWorker} = workersSlice.actions

export default workersSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import {getContacts} from "./contractsAction";


export const contractsSlice = createSlice({
    name: 'contracts',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetContracts: (state, action) => {
            state.list = action.payload || []
        },
        AddContract: (state, action) => {
            state.list.push(action.payload)
        },
        DeleteContract: (state, action) => {
            const indexOfWorker = state.list.findIndex(object => {
                return object.id === action.payload;
            });
            state.list.splice(indexOfWorker, 1);
        },
    },
    extraReducers: builder => {
        builder.addCase(getContacts.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(getContacts.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetContracts, AddContract, DeleteContract} = contractsSlice.actions

export default contractsSlice.reducer
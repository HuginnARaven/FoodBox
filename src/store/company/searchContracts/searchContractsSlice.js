import {createSlice} from '@reduxjs/toolkit'
import {searchSupp} from "./searchContractsAction";


export const searchContractsSlice = createSlice({
    name: 'search',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetSearch: (state, action) => {
            state.list = action.payload || []
        },
        SendSearch: (state, action) => {
            const indexOfSupplier = state.list.findIndex(object => {
                return object.id === action.payload;
            });
            state.list[indexOfSupplier].have_contact = true
        },
    },
    extraReducers: builder => {
        builder.addCase(searchSupp.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(searchSupp.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(searchSupp.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetSearch, SendSearch} = searchContractsSlice.actions

export default searchContractsSlice.reducer
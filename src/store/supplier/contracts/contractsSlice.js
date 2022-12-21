import {createSlice} from '@reduxjs/toolkit'
import {getSupplierContacts} from "./contractsAction";


export const supplierContractsSlice = createSlice({
    name: 'supplier-contracts',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetSupplierContracts: (state, action) => {
            state.list = action.payload || []
        },
        AcceptSupplierContract: (state, action) => {
            const indexOfCourier = state.list.findIndex(object => {
                return object.id === action.payload;
            });
            state.list[indexOfCourier].is_approved = true;
        },
        DeleteSupplierContract: (state, action) => {
            const indexOfWorker = state.list.findIndex(object => {
                return object.id === action.payload;
            });
            state.list.splice(indexOfWorker, 1);
        },
    },
    extraReducers: builder => {
        builder.addCase(getSupplierContacts.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(getSupplierContacts.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(getSupplierContacts.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetSupplierContracts, AcceptSupplierContract, DeleteSupplierContract} = supplierContractsSlice.actions

export default supplierContractsSlice.reducer
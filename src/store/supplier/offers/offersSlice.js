import {createSlice} from '@reduxjs/toolkit'
import {getOffers} from "./offersAction";


export const offersSlice = createSlice({
    name: 'offers',
    initialState: {list: [], is_loading: false},
    reducers: {
        SetOffers: (state, action) => {
            state.list = action.payload || []
        },
        AcceptOffer: (state, action) => {
            const indexOfOffer = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list[indexOfOffer] = action.payload;
        },
        DeclineOffer: (state, action) => {
            const indexOfMenu = state.list.findIndex(object => {
                return object.id === action.payload.id;
            });
            state.list.splice(indexOfMenu, 1);
        },
    },
    extraReducers: builder => {
        builder.addCase(getOffers.pending, (state, action) => {
            state.is_loading = true;
        });
        builder.addCase(getOffers.fulfilled, (state, action) => {
            state.is_loading = false;
        });
        builder.addCase(getOffers.rejected, (state, action) => {
            state.is_loading = false;
        });
    }
})

export const {SetOffers, AcceptOffer, DeclineOffer} = offersSlice.actions

export default offersSlice.reducer
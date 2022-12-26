import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from "./auth/authSlice";
import userSliceReducer from "./user/userSlice";
import workersSliceReducer from "./company/workers/workersSlice";
import boxesSliceReducer from "./company/boxes/boxesSlice";
import contractsSliceReducer from "./company/contracts/contractsSlice";
import couriersSliceReducer from "./supplier/courieres/couriersSlice";
import supplierContractsSliceReducer from "./supplier/contracts/contractsSlice";
import menusSliceReducer from "./supplier/menus/menusSlice";
import searchContractsSliceReducer from "./company/searchContracts/searchContractsSlice";
import offersSliceReducer from "./supplier/offers/offersSlice";

export default configureStore({
    reducer: {
        auth: authSliceReducer,
        user: userSliceReducer,
        workers: workersSliceReducer,
        boxes: boxesSliceReducer,
        contracts: contractsSliceReducer,
        searchContracts: searchContractsSliceReducer,
        couriers: couriersSliceReducer,
        supplierContracts: supplierContractsSliceReducer,
        supplierMenus: menusSliceReducer,
        supplierOffers: offersSliceReducer,
    },
})
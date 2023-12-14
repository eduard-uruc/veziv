import { configureStore } from '@reduxjs/toolkit';
import portofolioReducer from '../features/portofolioSlice';
import filterSlice from '../features/filterSlice';

export const store = configureStore({
    reducer: {
        items: portofolioReducer,
        filter: filterSlice,
    },
});

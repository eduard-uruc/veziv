import { createSlice } from '@reduxjs/toolkit';
import { VISIBLE } from '../constants/filters'

const filterSlice = createSlice({
    name: 'filter',
    initialState: VISIBLE,
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

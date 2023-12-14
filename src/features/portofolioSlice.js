import { createSlice } from '@reduxjs/toolkit';

const portofolioSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        update: (state, action) => {
            const { id, title, description, website, hidden, image } = action.payload;
            const itemToUpdate = state.find((item) => item.id === id);

            if (itemToUpdate) {
                itemToUpdate.title = title;
                itemToUpdate.description = description;
                itemToUpdate.website = website;
                itemToUpdate.hidden = hidden;
                itemToUpdate.image = image;
            }
        },
        hide: (state, action) => {
            const { id } = action.payload;
            const itemToHide = state.find((item) => item.id === id);

            if (itemToHide) {
                itemToHide.hidden = !itemToHide.hidden;
            }
        },
    },
});

export const { add, remove, update, hide } = portofolioSlice.actions;
export default portofolioSlice.reducer;
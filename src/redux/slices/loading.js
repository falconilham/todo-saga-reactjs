import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
    isLoading: false
};


const slice = createSlice({
    name: 'to-do-list-loading',
    initialState,
    reducers: {
        toggleLoading: (state) => {
            return {
                isLoading: !state.isLoading
            }
        },
    },
});

export const { toggleLoading } = slice.actions;

export default slice.reducer;


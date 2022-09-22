import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedItem: null,
    open: false
};


const slice = createSlice({
    name: 'to-do-list-modal',
    initialState,
    reducers: {
        changeItem: (state, action) => {
            const data = action.payload
            return {
                ...state,
                selectedItem: data,
                open: true
            }
        },
        closeModal: () => {
            return {
                selectedItem: null,
                open: false
            }
        },
        openModal: (state) => {
            return {
                ...state,
                open: true
            }
        }
    },
});

export const { changeItem, closeModal, openModal } = slice.actions

export default slice.reducer;


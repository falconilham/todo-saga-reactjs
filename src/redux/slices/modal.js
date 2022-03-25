import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../store';

// ----------------------------------------------------------------------

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

export function changeSelectedItem(payload) {
    dispatch(slice.actions.changeItem(payload));
}

export function closeModal() {
    dispatch(slice.actions.closeModal());
}

export function openModal() {
    dispatch(slice.actions.openModal());
}

export default slice.reducer;


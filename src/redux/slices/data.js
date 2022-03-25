import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
    dataTodo: []
};


const slice = createSlice({
    name: 'to-do-list-data',
    initialState,
    reducers: {
        addData: (state, action) => { 
            const data = action.payload
            console.log({addData: data})
            return {
                ...state,
                dataTodo: [...state.dataTodo, ...data]
            }
        },
        updateData(state, action) {
            const data = action.payload
            const filterData = state.dataTodo.filter(item => item.id !== data.id)
            // console.log({changeData:data, dataState: state.dataTodo})
            return {
                ...state,
                dataTodo: [data, ...filterData]
            }
        },
        removeData(state, action) {
            const id = action.payload
            const data = state.dataTodo.filter(item => item.id !== id)
            return {
                ...state,
                dataTodo: data
            }
        }
    },
});

export function updateData(payload) {
    dispatch(slice.actions.updateData(payload));
}

export function addData(payload) {
    dispatch(slice.actions.addData(payload));
}

export function removeData(id) {
    // console.log('removeData', id);
    dispatch(slice.actions.removeData(id))
}

export default slice.reducer;


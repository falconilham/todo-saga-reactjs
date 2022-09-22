import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
    dataTodo: [],
};


const slice = createSlice({
    name: 'to-do-list-data',
    initialState,
    reducers: {
        getData: () => { },
        addData: (state, action) => {
            const data = action.payload
            return {
                ...state,
                dataTodo: [...state.dataTodo, ...data]
            }
        },
        updateData(state, action) {
            const data = action.payload
            const filterData = state.dataTodo.filter(item => item.id !== data.id)
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
export const { addData, updateData, removeData, getData } = slice.actions;

export default slice.reducer;


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dataSlice from './slices/data';
import modalReducer from './slices/modal';

const rootReducer = combineReducers({
    modal: modalReducer,
    data:dataSlice
  });
  

const store = configureStore({
    reducer: rootReducer,
});
const { dispatch } = store;

export { dispatch };
    
export default store;

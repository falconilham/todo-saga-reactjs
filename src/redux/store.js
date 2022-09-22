import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import dataSlice from './slices/todo';
import modalReducer from './slices/modal';
import loading from './slices/loading';

const rootReducer = combineReducers({
  modal: modalReducer,
  data: dataSlice,
  loading
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

const { dispatch } = store;

export { dispatch };

export default store;

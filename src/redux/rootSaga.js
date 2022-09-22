import { takeLatest } from 'redux-saga/effects'
import { handleGetUser } from './sagas/handlerSaga'
import { getData } from './slices/todo/'

export default function* watcherSaga() {
    yield takeLatest(getData.type, handleGetUser)
}
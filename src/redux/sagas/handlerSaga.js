import { call, put } from "redux-saga/effects";
import { addData } from "../slices/todo";
import { toggleLoading } from '../slices/loading'
import { requestGetData } from "./request";

export function* handleGetUser() {
    yield put(toggleLoading())
    try {
        const response = yield call(requestGetData);
        const { data } = response;
        yield put(addData(data));
    } catch (error) {
        alert(error);
    }
    yield put(toggleLoading())
}
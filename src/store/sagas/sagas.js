import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  API_CALL_REQUEST

} from "../actions/asyncActions";
// Watcher SAGA
// Listens the API_CALL_REQUEST actions, una funcion con * indica que es una funcion generadora
export function* watcherSaga() {
  // Listens the action and starts a Worker Saga
  // eslint-disable-next-line no-undef
  yield takeLatest(API_CALL_REQUEST, WorkerSaga);
}

// WORKER SAGA
// Is called from watcher Saga, does the Login and Dispaches an action
export function* WorkerSaga(action) {
  try {
  //El yield operador se utiliza para pausar y reanudar una función del generador .
    const response = yield call(fetchHttp(action.payload.request));
    // We Obtain the token from response
    const token = response.data.token;
    yield put({
      type: action.payload.okAction, // API_CALL_SUCCESS
      payload: {
        token: token,
      },
    });
  } catch (error) {
    yield put({
      type: action.payload.failAction, // API_CALL_FAILURE
      payload: {
        error:error,
      },
    });
  }
}

function fetchHttp(request) {
  return function () {
    return axios(request);
  };
}

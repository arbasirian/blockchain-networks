import { takeLatest } from "redux-saga/effects";

import { networkActionTypes } from "@actionTypes";
import axiosMiddleware from "../saga-axios.middleware";

export default function* cartSaga() {
  yield takeLatest(
    networkActionTypes.LOAD_NETWORK_CONNECTION_STATUS,
    axiosMiddleware
  );
}

import { all } from "redux-saga/effects";

import networkSaga from "./network.saga";

export default function* saga() {
  yield all([networkSaga()]);
}

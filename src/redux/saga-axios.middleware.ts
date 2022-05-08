import { axiosHelper } from "@helpers";
import { ActionMethodEnum } from "@models";
import { call, put } from "redux-saga/effects";

export type AxiosMiddlewareProps = {
  method: ActionMethodEnum;
  type: string;
  url: string;
  resolve: (data: unknown) => void;
  reject: (data: unknown) => void;
  token?: string;
  header?: string;
  params?: { [key: string]: unknown };
  data?: { [key: string]: unknown };
};
export default function* axiosMiddleware(action: AxiosMiddlewareProps) {
  const { type, resolve, reject, ...params } = action;

  yield put({ type: `${type}_REQUESTING` });

  try {
    const { data } = yield call(axiosHelper, params);

    yield put({ type: `${type}_SUCCESS`, data });
    if (resolve) resolve(data);
  } catch (error: any) {
    const data = error?.response?.data || error;

    yield put({ type: `${type}_FAILURE`, error: data });
    if (reject) reject(data);
  }
}

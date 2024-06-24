import { put, takeLatest } from "@redux-saga/core/effects";
import { fetchProducts } from "../slice/products";

export function* handleFetchProducts() {
  yield put(fetchProducts());
}

export function* watchProductsSaga() {
  yield takeLatest("products/fetchProducts", handleFetchProducts);
}

export default function* rootSaga() {
  yield watchProductsSaga();
}

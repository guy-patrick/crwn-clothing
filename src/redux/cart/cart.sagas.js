import { takeLatest, put, all, call } from "redux-saga/effects";
import { clearCart } from "./cart.actions";

import { userTypes } from "../user/user.types";

const { SIGN_OUT_SUCCESS } = userTypes;

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

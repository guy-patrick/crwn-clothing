import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";
import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";

import { shopTypes } from "./shop.types";

const { FETCH_COLLECTIONS_START } = shopTypes;

function* fetchCollectionsAsync() {
  try {
    const collectionRef = db.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

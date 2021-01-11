import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollectionsError, updateCollectionsSuccess } from './shop.actions';
import ShopActionTypes from './shop.types';

function* fetchCollectionsAsync() {
  yield console.log('I am fired');
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(updateCollectionsSuccess(collectionsMap));
  } catch(error) {
    yield put(updateCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.UPDATE_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
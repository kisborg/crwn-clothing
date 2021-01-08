import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const updateCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const updateCollectionsStart = () => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS_START,
});

export const updateCollectionsError = (errorMessage) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS_ERROR,
  payload: errorMessage,
});

export const fetchCollectionsAsync = () => (
  dispatch => {
    dispatch(updateCollectionsStart());
    const collectionRef = firestore.collection('collections');
    collectionRef.get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollectionsSuccess(collectionsMap))
    })
    .catch(error => dispatch(updateCollectionsError(error.message)));
  }
)
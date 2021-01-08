import ShopActionTypes from './shop.types';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: '',
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      }
    case ShopActionTypes.UPDATE_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      }
    case ShopActionTypes.UPDATE_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};

export default shopReducer;
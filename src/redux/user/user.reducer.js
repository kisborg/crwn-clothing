import UserActionTypes from './user.types';

const initialState = {
  currentUser: null,
  errorMessage: null,

}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      }
    case UserActionTypes.SIGN_IN_ERROR:
    case UserActionTypes.SIGN_OUT_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      }
    default:
      return state;
  }
}

export default userReducer;
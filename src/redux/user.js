import * as ActionTypes from './ActionTypes';

export const User = (state = {
  isLoading: false,
  errMess: null,
  jwt_tocken:null
}, action) => {
  switch (action.type) {
      case ActionTypes.USER_LOGIN:
          return {...state, isLoading: false, errMess: null, jwt_tocken: action.payload};

      case ActionTypes.USER_LOADING:
          return {...state, isLoading: true, errMess: null, jwt_tocken: null}

      case ActionTypes.USER_FAILED:
          return {...state, isLoading: false, errMess: action.payload};

      default:
          return state;
  }
};

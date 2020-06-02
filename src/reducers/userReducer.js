import { USER_FAILED, USER_LOADED, USER_LOADING, USER_LOGIN } from '../actions/userAction'

const initialState = {
  isLoading: false,
  errMess: null,
  jwt_token: null,
}
export default function UserReducer (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLoading: false, errMess: null, jwt_token: action.payload }

    case USER_LOADING:
      return { ...state, isLoading: true, errMess: null, jwt_token: null }

    case USER_FAILED:
      return { ...state, isLoading: false, errMess: action.payload }
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        ...action.payload,
      }
    default:
      return state
  }
}

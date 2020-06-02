import { apiUrl, baseUrl } from '../shared/baseUrl'
import axios from 'axios'

export const USER_LOADING = 'USER_LOADING'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_FAILED = 'USER_FAILED'
export const USER_LOADED = 'USER_LOADED'



/* USER */
export const handleSignIn = (formData) => (dispatch) => {

  dispatch(userLoading())

  return axios
    .post(`${baseUrl}auth/token`, {
      ...formData,
    })
    .then(response => response.data)
    .then(data => {
      localStorage.setItem('token', data.accessToken)
      dispatch(setUser(data))
    })
    .catch(error => {
      dispatch(userFailed(error.message))
    })

}

export const handleGetUser = () => (dispatch) => {
  return axios
    .get(`${apiUrl}users`, )
    .then(response => response.data)
    .then(data => dispatch(getUser(data)))
    .catch(error => {
      console.log(error)
    })
}

export const userLoading = () => ({
  type: USER_LOADING,
})

export const userFailed = (error) => ({
  type: USER_FAILED,
  payload: error,
})

export const setUser = (token) => ({
  type: USER_LOGIN,
  payload: token,
})

export const getUser = (users) => ({
  type: USER_LOADED,
  payload: users
})

import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
import axios from 'axios'

/* USER */
export const postUser = (formData) => (dispatch) => {

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
      console.log('post login', error.message)
      dispatch(userFailed(error.message))
    })

  // return fetch(baseUrl + 'auth/token', {
  //   method: 'POST',
  //   body: JSON.stringify(formData),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   credentials: 'same-origin',
  // })
  //   .then(response => {
  //       if (response.ok) {
  //         return response
  //       } else {
  //         var error = new Error('Error ' + response.status + ': ' + response.statusText)
  //         error.response = response
  //         throw error
  //       }
  //     },
  //     error => {
  //       throw error
  //     })
  //   .then(response => {
  //     console.log(response)
  //     return response.json()
  //   })
  //   .then(response => dispatch(setUser(response)))
  //   .catch(error => {
  //     console.log('post login', error.message)
  //     dispatch(userFailed(error.message))
  //   })
}

export const userLoading = () => ({
  type: ActionTypes.USER_LOADING,
})

export const userFailed = (error) => ({
  type: ActionTypes.USER_FAILED,
  payload: error,
})

export const setUser = (token) => ({
  type: ActionTypes.USER_LOGIN,
  payload: token,
})

export const getUser = (users) => ({
  type: ActionTypes.USER_LOADED,
  payload: users
})

import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

/* USER */
export const postUser = (formData) => (dispatch) => {

	dispatch(userLoading());

	return fetch(baseUrl + 'auth/token', {
		method: "POST",
		body: JSON.stringify(formData),
		headers: {
			"Content-Type": "application/json"
		},
		credentials: "same-origin"
	})
		.then(
			response => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			error => {
				throw error;
			})
		.then(response => response.json())
		.then(response => dispatch(setUser(response)))
		.catch(error => { console.log('post login', error.message); alert('Your login info not be posted\nError: ' + error.message); });
};

export const userLoading = () => ({
	type: ActionTypes.USER_LOADING
});

export const userFailed = (errmess) => ({
	type: ActionTypes.USER_FAILED,
	payload: errmess
});

export const setUser = (token) => ({
	type: ActionTypes.USER_LOGIN,
	payload: token
});

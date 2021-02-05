import axios from 'axios';
import { history } from '../../../helpers';
import * as types from '../../action-types';

export const loginStart = () => ({
	type: types.LOGIN_START,
});

export const loginSuccess = (payload) => ({
	type: types.LOGIN_SUCCESS,
	payload,
});

export const loginFail = (payload) => ({
	type: types.LOGIN_FAIL,
	payload,
});

export const loginCleanup = () => ({
	type: types.LOGIN_CLEANUP,
});

export const login = (data, from) => {
	return (dispatch) => {
		dispatch(loginStart());
		const { username, password, rememberMe } = data;
		if (username === 'demo' && password === 'demo') {
			if (rememberMe === true) {
				localStorage.setItem(
					'user',
					JSON.stringify({ username, password })
				);
			}
			dispatch(loginSuccess(data));

			history.push(from);
		} else {
			dispatch(loginFail('Incorrect Login details'));
		}
	};
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('user');
};

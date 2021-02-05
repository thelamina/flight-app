import * as types from '../../action-types';
import { login as initialState } from '../../initialState';

const login = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_START:
			return {
				...state,
				isLoading: true,
			};
		case types.LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: action.payload,
			};
		case types.LOGIN_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.LOGIN_CLEANUP:
			return {
				...state,
				isLoading: false,
				isSuccessful: false,
				error: null,
			};
		default:
			return state;
	}
};

export default login;

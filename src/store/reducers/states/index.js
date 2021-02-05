import * as types from '../../action-types';
import { states as initialState } from '../../initialState';

const states = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_STATES_START:
			return {
				...state,
				isLoading: true,
			};
		case types.GET_STATES_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: action.payload,
			};
		case types.GET_STATES_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.GET_STATES_CLEANUP:
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

export default states;

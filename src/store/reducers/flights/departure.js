import * as types from '../../action-types';
import { flightDeparture as initialState } from '../../initialState';

const flightDeparture = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_FLIGHTS_DEPARTURE_START:
			return {
				...state,
				isLoading: true,
			};
		case types.GET_FLIGHTS_DEPARTURE_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: action.payload,
			};
		case types.GET_FLIGHTS_DEPARTURE_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.GET_FLIGHTS_DEPARTURE_CLEANUP:
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

export default flightDeparture;

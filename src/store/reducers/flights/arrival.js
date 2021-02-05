import * as types from '../../action-types';
import { flightDeparture as initialState } from '../../initialState';

const flightArrival = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_FLIGHTS_ARRIVAL_START:
			return {
				...state,
				isLoading: true,
			};
		case types.GET_FLIGHTS_ARRIVAL_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccessful: true,
				data: action.payload,
			};
		case types.GET_FLIGHTS_ARRIVAL_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.GET_FLIGHTS_ARRIVAL_CLEANUP:
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

export default flightArrival;

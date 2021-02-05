import axios from 'axios';
import * as types from '../../action-types';

export const getFlightArrivalStart = () => ({
	type: types.GET_FLIGHTS_ARRIVAL_START,
});

export const getFlightArrivalSuccess = (payload) => ({
	type: types.GET_FLIGHTS_ARRIVAL_SUCCESS,
	payload,
});

export const getFlightArrivalFail = (payload) => ({
	type: types.GET_FLIGHTS_ARRIVAL_FAIL,
	payload,
});

export const getFlightArrivalCleanup = () => ({
	type: types.GET_FLIGHTS_ARRIVAL_CLEANUP,
});

export const getFlightArrival = (minutes, airport) => async (dispatch) => {
	const now = new Date();
	const currentTime = Math.round(now.getTime() / 1000);
	const lastMinutes = Math.round(
		now.setMinutes(now.getMinutes() - minutes * 1000) / 1000
	);

	dispatch(getFlightArrivalStart());
	try {
		const { data } = await axios.get(
			`https://opensky-network.org/api/flights/arrival?airport=${airport}&begin=${lastMinutes}&end=${currentTime}`
		);
		dispatch(getFlightArrivalSuccess(data));
	} catch (e) {
		dispatch(getFlightArrivalFail(e));
	}
};

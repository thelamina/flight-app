import axios from 'axios';
import * as types from '../../action-types';

export const getFlightDepartureStart = () => ({
	type: types.GET_FLIGHTS_DEPARTURE_START,
});

export const getFlightDepartureSuccess = (payload) => ({
	type: types.GET_FLIGHTS_DEPARTURE_SUCCESS,
	payload,
});

export const getFlightDepartureFail = (payload) => ({
	type: types.GET_FLIGHTS_DEPARTURE_FAIL,
	payload,
});

export const getFlightDepartureCleanup = () => ({
	type: types.GET_FLIGHTS_DEPARTURE_CLEANUP,
});

export const getFlightDeparture = (minutes, airport) => async (dispatch) => {
	const now = new Date();
	const CurrentTime = Math.round(now.getTime() / 1000);
	const lastMinutes = Math.round(
		now.setMinutes(now.getMinutes() - minutes * 1000) / 1000
	);

	dispatch(getFlightDepartureStart());
	try {
		const { data } = await axios.get(
			`https://opensky-network.org/api/flights/departure?airport=${airport}&begin=${lastMinutes}&end=${CurrentTime}`
		);
		dispatch(getFlightDepartureSuccess(data));
	} catch (e) {
		dispatch(getFlightDepartureFail(e));
	}
};

import axios from 'axios';
import * as types from '../../action-types';

export const getStatesStart = () => ({
	type: types.GET_STATES_START,
});

export const getStatesSuccess = (payload) => ({
	type: types.GET_STATES_SUCCESS,
	payload,
});

export const getStatesFail = (payload) => ({
	type: types.GET_STATES_FAIL,
	payload,
});

export const getStatesCleanup = () => ({
	type: types.GET_STATES_CLEANUP,
});

export const getStates = () => async (dispatch) => {
	const now = new Date();
	const CurrentTime = Math.round(now.getTime() / 1000);
	const timeBefore = Math.round(
		now.setSeconds(now.getSeconds() - 60 * 60) / 1000
	);
	const timeAfter = Math.round(
		now.setSeconds(now.getSeconds() - 60 * 30) / 1000
	);
	dispatch(getStatesStart());
	try {
		const { data } = await axios.get(
			`https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800`
			// 'https://opensky-network.org/api/states/all'
		);
		console.log('dt', data);
		const filtered = data.filter(
			(d) => d.lastSeen < CurrentTime && d.firstSeen > CurrentTime
		);
		// const newData = [];
		// const sortedData = data.states.filter((d) => {
		// 	if (d[8] === false) {
		// 		newData[d[2]] =
		// 			newData[d[2]] === null || newData[d[2]] === undefined
		// 				? { count: 1, dt: d }
		// 				: { ...newData[d[2]], count: newData[d[2]].count + 1 };
		// 		return true;
		// 	}
		// 	return false;
		// });
		// const arrangedNewData = Object.entries(newData).sort(
		// 	(a, b) => b[1].count - a[1].count
		// );

		// console.log('sortedData', sortedData);
		// console.log('newData', newData);
		// console.log('arrangedNewData', arrangedNewData);

		dispatch(getStatesSuccess(data));
	} catch (e) {
		console.log(e);
		dispatch(getStatesFail(e));
	}
};

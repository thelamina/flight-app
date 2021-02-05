import { combineReducers } from 'redux';
import states from './states';
import login from './auth';
import flightArrival from './flights/arrival';
import flightDeparture from './flights/departure';

const rootReducer = combineReducers({
	states,
	login,
	flightArrival,
	flightDeparture,
	// flight: { arrival: flightsArrival, departure: flightsDeparture },
});

export default rootReducer;

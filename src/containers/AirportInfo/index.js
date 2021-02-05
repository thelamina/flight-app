import {
	Typography,
	List,
	ListItem,
	ListItemText,
	Select,
	MenuItem,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Modal } from '../../components';
import { getStates } from '../../store/actions/states';
import { getFlightArrival } from '../../store/actions/flights/arrival';
import { getFlightDeparture } from '../../store/actions/flights/departure';

import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

const AirportInfo = ({ data }) => {
	const [departureTime, setDepartureTime] = useState(2);
	const [arrivalTime, setArrivalTime] = useState(2);
	console.log('asdadadas', data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFlightArrival(arrivalTime, data.estArrivalAirport));
	}, [arrivalTime]);
	useEffect(() => {
		dispatch(getFlightDeparture(departureTime, data.estDepartureAirport));
	}, [departureTime]);

	const ArrivingflightStates = useSelector((state) => state.flightArrival);
	const DepartingflightStates = useSelector((state) => state.flightDeparture);

	return (
		<>
			<div>
				<Typography gutterBottom variant='h5'>
					Departing Flights
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={departureTime}
						onChange={(e) => setDepartureTime(e.target.value)}
					>
						<MenuItem value={2}>Two</MenuItem>
						<MenuItem value={5}>Five</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
					</Select>
				</Typography>

				<List>
					{DepartingflightStates.isLoading ? (
						<Loading />
					) : (
						DepartingflightStates.data?.map((flight) => (
							<ListItem>
								<ListItemText
									primary={flight.icao24}
									secondary={
										<div>
											<Typography>
												{`FIRST SEEN : ${new Date(
													flight.firstSeen * 1000
												)
													.toISOString()
													.slice(0, 19)
													.replace('T', ' ')}`}
											</Typography>
											<Typography>
												{`LAST SEEN : ${new Date(
													flight.lastSeen * 1000
												)
													.toISOString()
													.slice(0, 19)
													.replace('T', ' ')}`}
											</Typography>
										</div>
									}
								/>
							</ListItem>
						))
					)}
				</List>
			</div>
			<div>
				<Typography gutterBottom variant='h5'>
					Arriving Flights
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={arrivalTime}
						onChange={(e) => setArrivalTime(e.target.value)}
					>
						<MenuItem value={2}>Two</MenuItem>
						<MenuItem value={5}>Five</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
					</Select>
				</Typography>
				<List>
					{ArrivingflightStates.isLoading ? (
						<Loading />
					) : (
						ArrivingflightStates.data?.map((flight) => (
							<ListItem>
								<ListItemText
									primary={flight.icao24}
									secondary={
										<div>
											<Typography>
												{`FIRST SEEN : ${new Date(
													flight.firstSeen * 1000
												)
													.toISOString()
													.slice(0, 19)
													.replace('T', ' ')}`}
											</Typography>
											<Typography>
												{`LAST SEEN : ${new Date(
													flight.lastSeen * 1000
												)
													.toISOString()
													.slice(0, 19)
													.replace('T', ' ')}`}
											</Typography>
										</div>
									}
								/>
							</ListItem>
						))
					)}
				</List>
			</div>
		</>
	);
};

export default AirportInfo;

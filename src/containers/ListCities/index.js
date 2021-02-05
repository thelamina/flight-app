import {
	Container,
	Grid,
	GridList,
	Paper,
	Typography,
	Button,
	DialogActions,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Modal } from '../../components';
import { getStates } from '../../store/actions/states';
import { getFlightArrival } from '../../store/actions/flights/arrival';
import { getFlightDeparture } from '../../store/actions/flights/departure';
import { makeStyles } from '@material-ui/core/styles';
import AirportInfo from '../AirportInfo';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '10px',
		width: '100%',
		boxSizing: 'border-box',
		overflowX: 'hidden',
		marginTop: '12vh',
		minHeight: '80vh',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

const Airport = () => {
	const [departureTime, setDepartureTime] = useState(0);
	const [arrivalTime, setArrivalTime] = useState(0);
	const [airport, setAirport] = useState('');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFlightArrival(5, 'EDDF'));
		dispatch(getFlightDeparture(5, 'EDDF'));
	}, []);

	const ArrivingflightStates = useSelector((state) => state.flightArrival);
	const DepartingflightStates = useSelector((state) => state.flightArrival);

	return (
		<>
			<div>
				<Typography gutterBottom variant='h4'>
					Departing Flights
				</Typography>
				<List>
					{DepartingflightStates.isLoading ? (
						<Loading />
					) : (
						DepartingflightStates.data?.map((flight) => (
							<ListItem>
								<ListItemText
									primary={flight.icao24}
									secondary='Jan 9, 2014'
								/>
							</ListItem>
						))
					)}
				</List>
			</div>
			<div>
				<Typography gutterBottom variant='h4'>
					Arriving Flights
				</Typography>
				<List>
					{ArrivingflightStates.isLoading ? (
						<Loading />
					) : (
						ArrivingflightStates.data?.map((flight) => (
							<ListItem>
								<ListItemText
									primary={flight.icao24}
									secondary='Jan 9, 2014'
								/>
							</ListItem>
						))
					)}
				</List>
			</div>
		</>
	);
};

const ListCities = () => {
	const [open, setOpen] = useState(false);
	const [airData, setAirData] = useState(null);
	const handleClose = () => {
		setOpen(false);
	};
	const handleModalOpen = (value) => {
		setAirData(value);
		setOpen(true);
	};
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStates());
	}, []);

	const citiesState = useSelector(({ states }) => states);
	const { data, isLoading } = citiesState;
	console.log(data);
	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<div className={classes.root}>
				<Modal title='Airport' open={open} handleClose={handleClose}>
					<AirportInfo data={airData} />
					{/* <Typography gutterBottom>
						Cras mattis consectetur purus sit amet fermentum. Cras
						justo odio, dapibus ac facilisis in, egestas eget quam.
						Morbi leo risus, porta ac consectetur ac, vestibulum at
						eros.
					</Typography>
					<Typography gutterBottom>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur et. Vivamus sagittis lacus vel augue laoreet
						rutrum faucibus dolor auctor.
					</Typography>
					<Typography gutterBottom>
						Aenean lacinia bibendum nulla sed consectetur. Praesent
						commodo cursus magna, vel scelerisque nisl consectetur
						et. Donec sed odio dui. Donec ullamcorper nulla non
						metus auctor fringilla.
					</Typography>
					<DialogActions>
						<Button autoFocus onClick={null} color='primary'>
							Save changes
						</Button>
					</DialogActions> */}
				</Modal>
				<Grid
					style={{
						boxSizing: 'border-box',
					}}
					container
					spacing={8}
				>
					{data?.slice(0, 10).map((tile) => (
						<Grid
							style={{
								cursor: 'pointer',
							}}
							item
							xs={4}
							sm={3}
							key={tile.icao24 + tile.lastSeen}
							onClick={() => handleModalOpen(tile)}
						>
							<Paper className={classes.paper}>
								{tile.icao24} <p>{tile[2]}</p>
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
};

export default ListCities;

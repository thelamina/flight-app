import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logout } from '../../store/actions/auth';
import isLoggedin from '../../helpers/isLoggedin';
import { Link } from 'react-router-dom';
import { history } from '../../helpers';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		textDecoration: 'none',
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		history.push('/');
	};

	return (
		<div className={classes.root}>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography variant='h5' className={classes.title}>
						<Link
							to='/'
							style={{ textDecoration: 'none', color: '#fff' }}
						>
							Flights App
						</Link>
					</Typography>
					{
						<Button color='inherit' onClick={handleLogout}>
							Logout
						</Button>
					}
				</Toolbar>
			</AppBar>
		</div>
	);
}

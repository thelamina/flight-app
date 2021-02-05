import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Modal } from '../../components';
import { login, logout, loginCleanup } from '../../store/actions/auth';
import { Form, Notification } from '../../components';
import isLoggedin from '../../helpers/isLoggedin';
import { Typography } from '@material-ui/core';

const LoginForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [message, setMessage] = useState('');
	const [open, setOpen] = useState(false);
	const loginState = useSelector((state) => state.login);
	const data = { username, password, rememberMe };

	useEffect(() => {
		dispatch(logout());
	}, []);

	useEffect(() => {
		setMessage(loginState.error);
		// return () => {
		// 	dispatch(loginCleanup());
		// };
	}, [loginState.error]);

	const handleLogin = (e) => {
		e.preventDefault();

		const data = { username, password, rememberMe };
		if (username && password) {
			const { from } = location.state || { from: { pathname: '/' } };
			dispatch(login(data, from));
		}
		if (!loginState.isSuccessful) {
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};
	console.log(data);
	return (
		<>
			<Notification
				message={message}
				open={open}
				handleClose={handleClose}
			/>
			<Form>
				<Form.Title>LOGIN</Form.Title>
				<Form.Body>
					<Form.Input
						required
						id='user'
						label='Username'
						name='username'
						autoComplete='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<Form.Input
						required
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Form.CheckBox
						value={rememberMe}
						onChange={() => setRememberMe(!rememberMe)}
						label='Remember me'
					/>

					{
						<Form.Button
							type='submit'
							onClick={handleLogin}
							color='primary'
						>
							Sign In
						</Form.Button>
					}
				</Form.Body>
			</Form>
		</>
	);
};

export default LoginForm;

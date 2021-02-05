import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Modal } from '../../components';
import { login, loginCleanup } from '../../store/actions/auth';
import { Form, Notification } from '../../components';
import isLoggedin from '../../helpers/isLoggedin';

const LoginForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [message, setMessage] = useState('');
	const [open, setOpen] = useState(false);
	const loginState = useSelector((state) => state.login);
	const data = { username, password, rememberMe };

	const handleLogin = (e) => {
		e.preventDefault();
		const data = { username, password, rememberMe };
		dispatch(login(data));

		if (loginState.isSuccessful) {
			setOpen(true);
			setMessage('Welcome buddy!');
			history.push('/');
		} else {
			setOpen(true);
			setMessage(loginState.error);
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

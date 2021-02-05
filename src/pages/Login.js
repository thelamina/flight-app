import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { LoginForm } from '../containers';

export const Login = () => {
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<LoginForm />
		</Container>
	);
};

export default Login;

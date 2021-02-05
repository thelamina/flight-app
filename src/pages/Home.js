import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ListCities } from '../containers';
import isLoggedin from '../helpers/isLoggedin';

const Home = () => {
	if (!isLoggedin()) {
		return <Redirect to='/login' />;
	}
	return (
		<div>
			<ListCities />
		</div>
	);
};

export default Home;

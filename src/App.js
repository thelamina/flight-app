import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Header, PrivateRoute } from './components';
import { history } from './helpers';
import { Home, Login } from './pages';

const App = () => {
	return (
		<Router history={history}>
			<Header />
			<Switch>
				<PrivateRoute exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
			</Switch>
			<Route component={Footer} />
		</Router>
	);
};

export default App;

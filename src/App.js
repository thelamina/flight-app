import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home, Login } from './pages';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
			</Switch>
			<Route component={Footer} />
		</Router>
	);
};

export default App;

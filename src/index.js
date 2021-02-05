import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import './index.css';
import App from './app';
import store from './store';
import reportWebVitals from './reportWebVitals';
import THEME from './styles/global-styles';

const rootElement = document.getElementById('root');
render(
	<MuiThemeProvider theme={THEME}>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</MuiThemeProvider>,
	rootElement
);

reportWebVitals();

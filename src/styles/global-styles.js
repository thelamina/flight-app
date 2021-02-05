import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: `'PT Sans', sans-serif`,
	},
	overrides: {
		MuiButton: {
			root: {
				padding: '16px',
			},
		},
	},
});

export default theme;

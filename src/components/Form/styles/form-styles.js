import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const Paper = styled(withTheme('div'))((props) => ({
	marginTop: props.theme.spacing(10),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}));

export const Inner = styled(withTheme('form'))((props) => ({
	width: '100%',
	marginTop: props.theme.spacing(8),
}));

export const Input = styled(TextField)({});

export const CheckBox = styled(FormControlLabel)({});

export const MButton = styled(withTheme(Button))((props) => ({
	margin: props.theme.spacing(3, 0, 2),
}));

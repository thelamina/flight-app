import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { Inner, Input, MButton, CheckBox, Paper } from './styles/form-styles';

export default function Form({ children, ...restProps }) {
	return <Paper {...restProps}>{children}</Paper>;
}

Form.Body = ({ children, ...restProps }) => {
	return <Inner {...restProps}>{children}</Inner>;
};

Form.Title = ({ children, ...restProps }) => {
	return (
		<Typography component='h1' variant='h6' {...restProps}>
			{children}
		</Typography>
	);
};

Form.Input = ({ children, ...restProps }) => {
	return (
		<Input variant='outlined' margin='normal' fullWidth {...restProps} />
	);
};

Form.Button = ({ children, ...restProps }) => {
	return (
		<MButton fullWidth variant='contained' {...restProps}>
			{children}
		</MButton>
	);
};

Form.CheckBox = ({ children, value, label, ...restProps }) => {
	return (
		<CheckBox
			control={<Checkbox value={value} color='primary' />}
			label={label}
			{...restProps}
		/>
	);
};

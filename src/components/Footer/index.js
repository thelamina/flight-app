import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export const Footer = () => {
	return (
		<Box mt={8}>
			<Typography variant='body2' color='textSecondary' align='center'>
				{'Copyright © '}
				<Link color='inherit' href='https://material-ui.com/'>
					Built with love
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Box>
	);
};

export default Footer;

import Snackbar from '@material-ui/core/Snackbar';

export default Notification = ({ open, handleClose, message }) => {
	const SnackClose = () => {
		handleClose();
	};
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={open}
			autoHideDuration={2000}
			onClose={SnackClose}
			message={message}
		/>
	);
};

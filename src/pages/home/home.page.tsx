import { DirectionForm } from '@/features';
import { Loading, Up } from '@/shared';
import { useExchangeStore } from '@/shared/model';
import { DirectionCards, withLayout } from '@/widgets';
import { Alert, Snackbar } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import styles from './home.page.module.scss';

const HomePage: FC = () => {
	const { error, clearError, loading } = useExchangeStore();
	const [openError, setOpenError] = useState(false);

	useEffect(() => {
		if (error != '') {
			setOpenError(true);
		}
	}, [error]);

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenError(false);
		clearError();
	};

	return (
		<div className={styles.wrapper}>
			<DirectionForm />
			{loading ? <Loading /> : <DirectionCards />}
			<Up />
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={openError}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
					{error}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default withLayout(HomePage);

import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import styles from './Loading.module.scss';

export const Loading: FC = () => {
	return (
		<div className={styles.loading}>
			<CircularProgress />
		</div>
	);
};

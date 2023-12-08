import { useScrollY } from '@/shared/hooks';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from './Up.module.scss';

export const Up = (): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	return y > 500 ? (
		<motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
			<IconButton color='primary' aria-label='Наверх' onClick={scrollToTop}>
				<KeyboardArrowUpIcon />
			</IconButton>
		</motion.div>
	) : (
		<></>
	);
};

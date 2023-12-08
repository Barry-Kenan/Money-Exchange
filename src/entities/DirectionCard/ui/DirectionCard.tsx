import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, Card, CardActions, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import styles from './DirectionCard.module.scss';
import { DirectionCardProps } from './DirectionCard.props';

export const DirectionCard: FC<DirectionCardProps> = ({ direction }) => {
	return (
		<Card className={styles.card} component={motion.div} whileHover={{ scale: 1.1 }}>
			<Typography gutterBottom variant='h5' component='div'>
				{direction.name}
			</Typography>
			<div className={styles.cardContent}>
				<div className={styles.price}>
					<strong>{direction.in_count}</strong>
					<span>{direction.valute_from}</span>
				</div>
				<ArrowRightAltIcon />
				<div className={styles.price}>
					<strong>{direction.out_count}</strong>
					<span>{direction.valute_to}</span>
				</div>
			</div>

			<CardActions className={styles.cardActions}>
				<Link href={direction.partner_link} target='_blank'>
					<Button size='small' color='primary'>
						Партнеры
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

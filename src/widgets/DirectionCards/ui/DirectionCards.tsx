import { DirectionCard } from '@/entities';
import { useExchangeStore } from '@/shared/model';
import { FC } from 'react';
import styles from './DirectionCards.module.scss';

export const DirectionCards: FC = () => {
	const { directionList } = useExchangeStore();

	return (
		<div className={styles.wrapper}>
			{directionList.map((e) => (
				<DirectionCard direction={e} key={e.id} />
			))}
		</div>
	);
};

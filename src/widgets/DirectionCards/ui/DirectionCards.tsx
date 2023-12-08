import { DirectionCard } from '@/entities';
import { useExchangeStore } from '@/shared/model';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';
import { FC } from 'react';
import styles from './DirectionCards.module.scss';

export const DirectionCards: FC = () => {
	const { directionList, setDirectionList } = useExchangeStore();

	const handleSortAZ = () => {
		const data = directionList.sort((a, b) => (a.name > b.name ? 1 : -1));
		setDirectionList(data);
	};

	const handleSortZA = () => {
		const data = directionList.sort((a, b) => (a.name > b.name ? -1 : 1));
		setDirectionList(data);
	};

	return directionList.length ? (
		<>
			<div className={styles.sort}>
				<h3>Сортировка по имени</h3>
				<IconButton title='От А-Я' onClick={handleSortAZ}>
					<ArrowUpwardIcon />
				</IconButton>
				<IconButton title='От Я-А' onClick={handleSortZA}>
					<ArrowDownwardIcon />
				</IconButton>
			</div>
			<div className={styles.cards}>
				{directionList.map((e) => (
					<DirectionCard direction={e} key={e.id} />
				))}
			</div>
		</>
	) : (
		<></>
	);
};

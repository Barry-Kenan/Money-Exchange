import { DirectionForm } from '@/features';
import { useExchangeStore } from '@/shared/model';
import { withLayout } from '@/widgets';
import { FC } from 'react';

const HomePage: FC = () => {
	const { directionList } = useExchangeStore();
	return (
		<>
			<DirectionForm />
			<ul>
				{directionList.map((e) => (
					<li key={e.id}>{e.name}</li>
				))}
			</ul>
		</>
	);
};

export default withLayout(HomePage);

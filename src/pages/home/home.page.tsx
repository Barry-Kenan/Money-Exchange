import { withLayout } from '@/widgets';
import { Button } from '@mui/material';
import { FC } from 'react';

const HomePage: FC = () => {
	return (
		<>
			<h1>home.page</h1>
			<Button color='primary'>Material UI</Button>
			<Button color='info'>Material UI</Button>
		</>
	);
};

export default withLayout(HomePage);

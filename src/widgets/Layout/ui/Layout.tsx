import { Footer, Header } from '@/features';
import { FC, FunctionComponent } from 'react';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<main className={styles.body} role='main'>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};

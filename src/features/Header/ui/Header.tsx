import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<ScreenSearchDesktopIcon />
			<h3>MoneyExchange</h3>
		</header>
	);
};

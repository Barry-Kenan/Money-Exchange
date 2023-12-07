import cn from 'classnames';
import { format } from 'date-fns';
import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			© {format(new Date(), 'yyyy')} MoneyExchange - мониторинг обменников. Все права защищены
		</footer>
	);
};

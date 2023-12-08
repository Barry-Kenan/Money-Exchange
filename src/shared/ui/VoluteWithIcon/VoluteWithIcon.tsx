import { VoluteEnum } from '@/shared/enums';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { FC } from 'react';
import styles from './VoluteWithIcon.module.scss';
import { VoluteWithIconProps } from './VoluteWithIcon.props';

export const VoluteWithIcon: FC<VoluteWithIconProps> = ({ name }) => {
	switch (name) {
		case VoluteEnum.Bitcoin:
			return (
				<div className={styles.wrapper}>
					<CurrencyBitcoinIcon color='primary' />
					<span>Bitcoin (BTC)</span>
				</div>
			);
		case VoluteEnum.SberbankRub:
			return (
				<div className={styles.wrapper}>
					<CurrencyRubleIcon color='primary' />
					<span>Sberbank (RUB)</span>
				</div>
			);
		default:
			const _a: never = name;
	}
};

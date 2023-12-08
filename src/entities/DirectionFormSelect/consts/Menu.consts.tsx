import { VoluteWithIcon } from '@/shared';
import { VoluteEnum } from '@/shared/enums';

export const menuItems = [
	{ label: 'None', value: '' },
	{
		label: <VoluteWithIcon name={VoluteEnum.Bitcoin} />,
		value: VoluteEnum.Bitcoin
	},
	{
		label: <VoluteWithIcon name={VoluteEnum.SberbankRub} />,
		value: VoluteEnum.SberbankRub
	}
];

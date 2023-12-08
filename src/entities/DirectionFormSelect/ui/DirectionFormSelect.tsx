import { ReactHookFormSelect } from '@/shared';
import { MenuItem } from '@mui/material';
import { FC } from 'react';
import { menuItems } from '../consts';
import { DirectionFormSelectProps } from './DirectionFormSelect.props';

export const DirectionFormSelect: FC<DirectionFormSelectProps> = ({
	name,
	label,
	control,
	defaultValue,
	isSelectDisabled,
	watchValue
}) => {
	return (
		<ReactHookFormSelect
			name={name}
			label={label}
			control={control}
			defaultValue={defaultValue}
			fullWidth
			disabled={isSelectDisabled ?? false}
		>
			{menuItems.map((m) => (
				<MenuItem key={m.value} value={m.value} disabled={watchValue === m.value && watchValue !== ''}>
					{m.label}
				</MenuItem>
			))}
		</ReactHookFormSelect>
	);
};

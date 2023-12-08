import { FormControl, InputLabel, Select } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { ReactHookFormSelectProps } from './ReactHookFormSelect.props';

export const ReactHookFormSelect: FC<ReactHookFormSelectProps> = ({
	name,
	label,
	control,
	defaultValue,
	children,
	...props
}) => {
	const labelId = `${name}-label`;
	return (
		<FormControl {...props}>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Controller
				render={({ field }) => (
					<Select labelId={labelId} label={label} {...field}>
						{children}
					</Select>
				)}
				name={name}
				control={control}
				defaultValue={defaultValue}
				rules={{
					required: {
						value: true,
						message: 'Заполните поле'
					}
				}}
			/>
		</FormControl>
	);
};

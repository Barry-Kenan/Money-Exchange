import { FormControlOwnProps } from '@mui/material';
import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export interface ReactHookFormSelectProps extends FormControlOwnProps {
	name: string;
	label: string;
	defaultValue: string;
	control: Control<FieldValues> | undefined;
	children: ReactNode;
}

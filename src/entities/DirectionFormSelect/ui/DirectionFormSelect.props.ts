import { Control, FieldValues } from 'react-hook-form';

export interface DirectionFormSelectProps {
	name: string;
	label: string;
	control: Control<FieldValues> | undefined;
	defaultValue: string;
	isSelectDisabled?: boolean;
	watchValue: string;
}

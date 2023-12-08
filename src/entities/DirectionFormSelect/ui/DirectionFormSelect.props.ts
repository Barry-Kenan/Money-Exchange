import { IDirectionReq } from '@/shared/interface';
import { Control } from 'react-hook-form';

export interface DirectionFormSelectProps {
	name: string;
	label: string;
	control: Control<IDirectionReq> | undefined;
	defaultValue: string;
	isSelectDisabled?: boolean;
	watchValue: string;
}

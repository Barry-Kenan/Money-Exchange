import { DirectionFormSelect } from '@/entities';
import { DirectionParamsEnum } from '@/shared/enums';
import { IDirectionReq } from '@/shared/interface';
import { useExchangeStore } from '@/shared/model';
import { Button } from '@mui/material';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const DirectionForm: FC = () => {
	const {
		control,
		handleSubmit,
		watch,
		resetField,
		formState: { isValid }
	} = useForm<IDirectionReq>();
	const { getDirectionList } = useExchangeStore();

	const onSubmit = (formData: IDirectionReq) => {
		getDirectionList(formData);
		// eslint-disable-next-line no-console
		console.log(formData);
	};

	const voluteFrom = watch(DirectionParamsEnum.VoluteFrom);
	useEffect(() => {
		if (voluteFrom === '') {
			resetField(DirectionParamsEnum.VoluteTo);
		}
	}, [voluteFrom]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<DirectionFormSelect
				name={DirectionParamsEnum.VoluteFrom}
				label='Отдаете'
				control={control}
				defaultValue=''
				watchValue={watch(DirectionParamsEnum.VoluteTo)}
			/>
			<DirectionFormSelect
				name={DirectionParamsEnum.VoluteTo}
				label='Получаете'
				control={control}
				defaultValue=''
				watchValue={watch(DirectionParamsEnum.VoluteFrom)}
				isSelectDisabled={!watch(DirectionParamsEnum.VoluteFrom)}
			/>
			{isValid && <Button type='submit'>Получить список обменников</Button>}
		</form>
	);
};

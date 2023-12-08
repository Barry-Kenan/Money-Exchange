import { DirectionFormSelect } from '@/entities';
import { DirectionParamsEnum } from '@/shared/enums';
import { IDirectionReq } from '@/shared/interface';
import { useExchangeStore } from '@/shared/model';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './DirectionForm.module.scss';

export const DirectionForm: FC = () => {
	const {
		control,
		handleSubmit,
		watch,
		resetField,
		formState: { isValid }
	} = useForm<IDirectionReq>();
	const { getDirectionList } = useExchangeStore();
	const [isClicked, setIsClicked] = useState<boolean>(false);

	const onSubmit = (formData: IDirectionReq) => {
		getDirectionList(formData);
		setIsClicked(true);
	};

	const voluteFrom = watch(DirectionParamsEnum.VoluteFrom);
	useEffect(() => {
		if (voluteFrom === '') {
			resetField(DirectionParamsEnum.VoluteTo);
		}
		setIsClicked(false);
	}, [voluteFrom]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<h3>Выберите валюты</h3>
			<div className={styles.form}>
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
				{isValid && !isClicked && (
					<Button type='submit' color='secondary' className={styles.submitButton}>
						Далее
						<NavigateNextIcon />
					</Button>
				)}
			</div>
		</form>
	);
};

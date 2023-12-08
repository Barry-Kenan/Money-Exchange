import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { exchangeApi } from '../api';
import { IDirection, IDirectionReq } from '../interface';

interface IExchangeStore {
	directionList: IDirection[];
	getDirectionList: (data: IDirectionReq) => void;
	setDirectionList: (data: IDirection[]) => void;
	error: string;
	loading: boolean;
	clearError: () => void;
}

export const useExchangeStore = create<IExchangeStore>()(
	devtools((set) => ({
		directionList: [],
		error: '',
		loading: false,
		getDirectionList: async (data: IDirectionReq) => {
			try {
				set(() => ({ loading: true }), false, 'setLoading');
				const response = await exchangeApi.getDirections(data);
				set(() => ({ directionList: response }), false, 'getDirectionList');
			} catch (err) {
				set(() => ({ error: (err as Error).message }), false, 'setError');
				set(() => ({ directionList: [] }), false, 'getDirectionList');
			} finally {
				set(() => ({ loading: false }), false, 'setLoading');
			}
		},
		setDirectionList: (data: IDirection[]) => {
			set(
				() => ({
					directionList: data
				}),
				false,
				'setDirectionList'
			);
		},
		clearError: () => {
			set(
				() => ({
					error: ''
				}),
				false,
				'clearError'
			);
		}
	}))
);

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { exchangeApi } from '../api';
import { IDirection, IDirectionReq } from '../interface';

interface IExchangeStore {
	directionList: IDirection[];
	getDirectionList: (data: IDirectionReq) => void;
	clearDirectionList: () => void;
	error: string;
}

export const useExchangeStore = create<IExchangeStore>()(
	devtools((set) => ({
		directionList: [],
		error: '',
		getDirectionList: async (data: IDirectionReq) => {
			try {
				const response = await exchangeApi.getDirections(data);
				set(() => ({ directionList: response }), false, 'getDirectionList');
			} catch (err) {
				set(() => ({ error: (err as Error).message }), false, 'setError');
			}
		},
		clearDirectionList: () => {
			set(
				() => ({
					directionList: []
				}),
				false,
				'clearDirectionList'
			);
		}
	}))
);

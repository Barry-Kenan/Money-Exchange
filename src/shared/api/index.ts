import axios from 'axios';
import { IDirectionReq } from './../interface/directionReq.interface';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const instanceApi = axios.create({
	baseURL: API_URL
});

export const exchangeApi = {
	getDirections({ valute_from, valute_to }: IDirectionReq) {
		return instanceApi
			.get('directions', {
				params: {
					valute_from,
					valute_to
				}
			})
			.then((res) => res.data);
	}
};

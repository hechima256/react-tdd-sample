import { HttpResponse, http } from 'msw';
import { ResourceResponse } from '../types/api';

export const handlers = [
	http.get('/resource', () => {
		return HttpResponse.json<ResourceResponse>({ text: 'Hello World' });
	}),
];

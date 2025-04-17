import { HttpResponse, http } from 'msw';

export const handlers = [
	http.get('/resource', () => {
		return HttpResponse.json({ text: 'Hello World' });
	}),
];

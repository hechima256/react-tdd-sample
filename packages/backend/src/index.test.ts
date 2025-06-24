import { describe, expect, it } from 'vitest';
import { buildServer } from './index';

describe('GET /todos', () => {
	it('should return 200', async () => {
		const app = await buildServer();
		const response = await app.inject({
			method: 'GET',
			url: '/todos',
		});
		expect(response.statusCode).toBe(200);
	});
});

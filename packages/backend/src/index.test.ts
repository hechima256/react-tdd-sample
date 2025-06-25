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

	it('should return JSON', async () => {
		const app = await buildServer();
		const response = await app.inject({
			method: 'GET',
			url: '/todos',
		});
		expect(response.headers['content-type']).toContain('application/json');
	});

	it('should return an array', async () => {
		const app = await buildServer();
		const response = await app.inject({
			method: 'GET',
			url: '/todos',
		});
		const todos = JSON.parse(response.payload);
		expect(todos).toBeInstanceOf(Array);
	});

	it('should return an empty array (initial state)', async () => {
		const app = await buildServer();
		const response = await app.inject({
			method: 'GET',
			url: '/todos',
		});
		const todos = JSON.parse(response.payload);
		expect(todos).toEqual([]);
	});
});

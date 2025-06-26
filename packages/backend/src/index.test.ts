import type { FastifyInstance } from 'fastify';
import { beforeEach, describe, expect, it } from 'vitest';
import { buildServer } from './index';

describe('GET /todos', () => {
	let app: FastifyInstance;

	beforeEach(async () => {
		app = await buildServer();
	});

	const getTodos = async () => {
		return await app.inject({
			method: 'GET',
			url: '/todos',
		});
	};

	it('should return 200', async () => {
		const response = await getTodos();
		expect(response.statusCode).toBe(200);
	});

	it('should return JSON', async () => {
		const response = await getTodos();
		expect(response.headers['content-type']).toContain('application/json');
	});

	it('should return an array', async () => {
		const response = await getTodos();
		const todos = JSON.parse(response.payload);
		expect(todos).toBeInstanceOf(Array);
	});
});

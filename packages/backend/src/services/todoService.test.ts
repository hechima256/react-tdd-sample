import { beforeEach, describe, expect, it } from 'vitest';
import { TodoService } from './todoService';

describe('TodoService (GETのみ)', () => {
	let service: TodoService;

	beforeEach(() => {
		service = new TodoService();
	});

	it('return empty array', () => {
		expect(service.getAllTodos()).toEqual([]);
	});
});

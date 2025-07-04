import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryTodoDB, TodoService } from './todoService';

describe('TodoService (GET)', () => {
	let service: TodoService;
	let testDb: InMemoryTodoDB;

	beforeEach(() => {
		testDb = new InMemoryTodoDB([]);
		service = new TodoService(testDb);
	});

	it('return set data', () => {
		const testData = [{ id: 1, title: 'test', completed: false }];
		testDb.setAll(testData);
		expect(service.getAllTodos()).toEqual(testData);
	});
});

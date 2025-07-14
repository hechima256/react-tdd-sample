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

		const result = service.getAllTodos();

		expect(result).toEqual([{ id: 1, title: 'test', completed: false }]);
	});
});

describe('TodoService (POST)', () => {
	let service: TodoService;
	let testDb: InMemoryTodoDB;

	beforeEach(() => {
		testDb = new InMemoryTodoDB([]);
		service = new TodoService(testDb);
	});

	it('add new todo to empty todos', () => {
		const newTodo = { id: 1, title: 'test', completed: false };

		service.addTodo(newTodo);

		expect(service.getAllTodos()).toEqual([{ id: 1, title: 'test', completed: false }]);
	});

	it('add new todo to existing todos', () => {
		const initialTodos = [
			{ id: 1, title: 'test', completed: false },
			{ id: 2, title: 'test2', completed: false },
		];
		testDb.setAll(initialTodos);

		const newTodo = { title: 'test3', completed: false };
		service.addTodo(newTodo);

		expect(service.getAllTodos()).toEqual([
			{ id: 1, title: 'test', completed: false },
			{ id: 2, title: 'test2', completed: false },
			{ id: 3, title: 'test3', completed: false },
		]);
	});

	// 追加したtodoが戻ってくること
	it('return added todo', () => {
		const initialTodos = [
			{ id: 1, title: 'test', completed: false },
			{ id: 2, title: 'test2', completed: false },
		];
		testDb.setAll(initialTodos);

		const newTodo = { id: 3, title: 'test3', completed: false };
		const result = service.addTodo(newTodo);

		expect(result).toEqual({ id: 3, title: 'test3', completed: false });
	});
});

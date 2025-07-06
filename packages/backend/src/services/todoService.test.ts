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

describe('TodoService (POST)', () => {
	let service: TodoService;
	let testDb: InMemoryTodoDB;

	beforeEach(() => {
		testDb = new InMemoryTodoDB([]);
		service = new TodoService(testDb);
	});

	it('add new todo', () => {
		const newTodo = { id: 1, title: 'test', completed: false };
		service.addTodo(newTodo);

		expect(service.getAllTodos()).toEqual([newTodo]);
	});

	it('add new todo to existing todos', () => {
		const initialTodo = { id: 1, title: 'test', completed: false };
		testDb.setAll([initialTodo]);

		const newTodo = { id: 2, title: 'test2', completed: false };
		service.addTodo(newTodo);

		expect(service.getAllTodos()).toEqual([initialTodo, newTodo]);
	});
});

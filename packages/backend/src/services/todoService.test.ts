import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryTodoDB, TodoService, type Todo, DEFAULT_TODOS } from './todoService';

// テスト専用のTodoService拡張
class TestableTodoService extends TodoService {
	private testDb: InMemoryTodoDB;
	constructor() {
		const db = new InMemoryTodoDB();
		super(db);
		this.testDb = db;
	}
	setTestData(todos: Todo[]): void {
		this.testDb.setAll(todos);
	}
}

describe('TodoService (GET)', () => {
	let service: TestableTodoService;

	beforeEach(() => {
		service = new TestableTodoService();
	});

	it('return all data initialized', () => {
		expect(service.getAllTodos()).toEqual(DEFAULT_TODOS);
	});

	it('return set data', () => {
		const testData = [{ id: 1, title: 'test', completed: false }];
		service.setTestData(testData);
		expect(service.getAllTodos()).toEqual(testData);
	});
});

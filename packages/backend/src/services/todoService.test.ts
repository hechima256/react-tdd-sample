import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryTodoDB, TodoService, type Todo } from './todoService';

// テスト用のデータ
const TEST_DATA: Todo[] = [
	{ id: 1, title: 'test1', completed: false },
	{ id: 2, title: 'test2', completed: false },
	{ id: 3, title: 'test3', completed: false },
];

// テスト専用のTodoService拡張
class TestableTodoService extends TodoService {
	private testDb: InMemoryTodoDB;
	constructor() {
		const db = new InMemoryTodoDB(TEST_DATA);
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
		expect(service.getAllTodos()).toEqual(TEST_DATA);
	});

	it('return set data', () => {
		const testData = [{ id: 1, title: 'test', completed: false }];
		service.setTestData(testData);
		expect(service.getAllTodos()).toEqual(testData);
	});
});

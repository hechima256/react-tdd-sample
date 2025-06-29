import { beforeEach, describe, expect, it } from 'vitest';
import { TodoService, type Todo } from './todoService';

// テスト専用のTodoService拡張
class TestableTodoService extends TodoService {
	setTestData(todos: Todo[]): void {
		(this as any).todos = todos;
	}
}

describe('TodoService (GET)', () => {
	let service: TestableTodoService;

	beforeEach(() => {
		service = new TestableTodoService();
	});

	it('return empty array', () => {
		expect(service.getAllTodos()).toEqual([]);
	});

	it('return set data', () => {
		const testData = [{ id: 1, title: 'test', completed: false }];
		service.setTestData(testData);
		expect(service.getAllTodos()).toEqual(testData);
	});
});

export type Todo = { id: number; title: string; completed: boolean };

export class TodoService {
	private todos: Todo[] = [
		{ id: 1, title: 'test', completed: false },
		{ id: 2, title: 'test2', completed: false },
		{ id: 3, title: 'test3', completed: false },
	];
	private nextId = 1;

	getAllTodos(): Todo[] {
		return this.todos;
	}
}

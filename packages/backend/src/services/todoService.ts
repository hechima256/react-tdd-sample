export type Todo = { id: number; title: string; completed: boolean };

export class TodoService {
	private todos: Todo[] = [];
	private nextId = 1;

	getAllTodos(): Todo[] {
		return this.todos;
	}
}

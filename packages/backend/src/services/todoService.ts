export type Todo = { id: number; title: string; completed: boolean };

// インメモリDB的なクラス
export class InMemoryTodoDB {
	private todos: Todo[];
	constructor(
		initialTodos: Todo[] = [
			{ id: 1, title: 'test1', completed: false },
			{ id: 2, title: 'test2', completed: false },
			{ id: 3, title: 'test3', completed: false },
		]
	) {
		this.todos = initialTodos;
	}
	getAll(): Todo[] {
		return [...this.todos];
	}
	setAll(todos: Todo[]): void {
		this.todos = todos;
	}
}

export class TodoService {
	private db: InMemoryTodoDB;
	constructor(db?: InMemoryTodoDB) {
		this.db = db ?? new InMemoryTodoDB();
	}
	getAllTodos(): Todo[] {
		return this.db.getAll();
	}
}

export type Todo = { id: number; title: string; completed: boolean };

// 初期データを定数として切り出し
const INITIAL_TODOS: Todo[] = [
	{ id: 1, title: 'test1', completed: false },
	{ id: 2, title: 'test2', completed: false },
	{ id: 3, title: 'test3', completed: false },
];

// インメモリDB的なクラス
export class InMemoryTodoDB {
	private todos: Todo[];
	constructor(initialTodos: Todo[]) {
		this.todos = [...initialTodos];
	}
	getAll(): Todo[] {
		return [...this.todos];
	}
	setAll(todos: Todo[]): void {
		this.todos = todos;
	}
	add(todo: Todo): void {
		this.todos.push(todo);
	}
}

export class TodoService {
	private db: InMemoryTodoDB;
	constructor(db?: InMemoryTodoDB) {
		this.db = db ?? new InMemoryTodoDB(INITIAL_TODOS);
	}
	getAllTodos(): Todo[] {
		return this.db.getAll();
	}
	addTodo(todo: Todo): Todo {
		this.db.add(todo);
		return todo;
	}
}

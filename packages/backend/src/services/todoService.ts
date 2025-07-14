export type Todo = { id: number; title: string; completed: boolean };
export type NewTodo = { title: string; completed: boolean };

// 初期データを定数として切り出し
const INITIAL_TODOS: Todo[] = [
	{ id: 1, title: 'test1', completed: false },
	{ id: 2, title: 'test2', completed: false },
	{ id: 3, title: 'test3', completed: false },
];

// インメモリDB的なクラス
export class InMemoryTodoDB {
	private todos: Todo[];
	private nextId: number;

	constructor(initialTodos: Todo[]) {
		this.todos = [...initialTodos];
		this.nextId = initialTodos.length + 1;
	}

	getAll(): Todo[] {
		return [...this.todos];
	}
	setAll(todos: Todo[]): void {
		this.todos = todos;
		this.nextId = todos.length + 1;
	}
	add(todo: NewTodo): Todo {
		const todoWithId: Todo = { id: this.nextId++, ...todo };
		this.todos.push(todoWithId);
		console.log(this.todos);
		return todoWithId;
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
	addTodo(todo: NewTodo): Todo {
		return this.db.add(todo);
	}
}

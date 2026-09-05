interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  async function fetchIncompleteTodos(): Promise<Todo[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: Todo[] = await response.json();
    return todos.filter((todo) => !todo.completed);
  }
  
  async function run() {
    const incomplete = await fetchIncompleteTodos();
    console.log(incomplete.slice(0, 5)); // in thử 5 cái đầu
  }
  run();
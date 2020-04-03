import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  logTodo(response.data);
});

const logTodo = (todo: Todo) => {
  console.log(`
    The Todo with ID: ${todo.id}
    Has a Title of: ${todo.title}
    Is it finished? ${todo.completed}
  `);
};

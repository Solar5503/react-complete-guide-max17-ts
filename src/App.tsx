import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const initTodos = [new Todo('Learn React'), new Todo('Learn TypesScript')];
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const addTodoHandler = (todoText: string) =>
    setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
  const delTodoHandler = (id: string) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => id !== todo.id));

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} delTodo={delTodoHandler} />
    </>
  );
}

export default App;

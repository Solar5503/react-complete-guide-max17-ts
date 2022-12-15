import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const initTodos = [new Todo('Learn React'), new Todo('Learn TypesScript')];
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const addTodoHandler = (todoText: string) =>
    setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;

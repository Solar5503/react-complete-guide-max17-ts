import React, { FC, useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC = ({ children }) => {
  const initTodos = [new Todo('Learn React'), new Todo('Learn TypesScript')];
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const addTodoHandler = (todoText: string) =>
    setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);

  const delTodoHandler = (id: string) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => id !== todo.id));

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: delTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

import React, { FC, useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';

const NewTodo: FC = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo.trim().length === 0) return;

    addTodo(enteredTodo);
    todoRef.current!.value = '';
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

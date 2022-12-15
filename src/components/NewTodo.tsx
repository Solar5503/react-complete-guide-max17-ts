import React, { FC, useRef } from 'react';
import styles from './NewTodo.module.css';

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo.trim().length === 0) return;

    onAddTodo(enteredTodo);
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

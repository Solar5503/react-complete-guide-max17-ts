import React, { useRef } from 'react';

const NewTodo = () => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo.trim().length === 0) return;
    console.log(enteredTodo);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

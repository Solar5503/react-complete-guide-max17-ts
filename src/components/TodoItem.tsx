import React, { FC } from 'react';
import Todo from '../models/todo';
import styles from './TodoItem.module.css';

const TodosItem: FC<{ todo: Todo; delTodo: (id: string) => void }> = ({
  todo,
  delTodo,
}) => {
  const clickHandler = () => delTodo(todo.id);

  return (
    <li className={styles.item} onClick={clickHandler}>
      {todo.text}
    </li>
  );
};

export default TodosItem;

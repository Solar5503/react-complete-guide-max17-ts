import { FC } from 'react';
import Todo from '../models/todo';
import styles from './Todos.module.css';
import TodoItem from './TodoItem';

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todos;

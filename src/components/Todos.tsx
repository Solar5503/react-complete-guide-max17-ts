import { FC } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: FC<{ items: Todo[]; delTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} delTodo={props.delTodo} />
      ))}
    </ul>
  );
};

export default Todos;

import { FC } from 'react';
import Todo from '../models/todo';
import styles from './TodoItem.module.css';

const TodosItem: FC<{ todo: Todo }> = ({ todo }) => {
  return <li className={styles.item}>{todo.text}</li>;
};

export default TodosItem;

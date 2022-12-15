import { FC, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: FC = () => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} todo={item} delTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;

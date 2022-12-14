import { FC } from 'react';
import Todo from '../models/todo';
import TodosItem from './TodosItem';

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodosItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todos;

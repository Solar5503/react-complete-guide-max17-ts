import { FC } from 'react';
import Todo from '../models/todo';

const TodosItem: FC<{ todo: Todo }> = ({ todo }) => {
  return <li>{todo.text}</li>;
};

export default TodosItem;

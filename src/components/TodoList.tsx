import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';


export interface ITodoListProps {
}

export default function TodoList (props: ITodoListProps) {
  return (
    <div className ="TodoList">
        <TodoListItem/>      
    </div>
  );
}

import React from 'react';
import TodoListItem from './TodoListItem';
import {Todo} from './Entity';
import './TodoList.scss';


export interface ITodoListProps {
    todos: Todo[];
    onRemove: (id:number) => void; 
    onToggle: (id:number) => void; 
}

export default function TodoList (props: ITodoListProps) {
  return (
    <div className ="TodoList">
        {props.todos.map( 
            todo=>( 
            <TodoListItem 
                todo = {todo} 
                key = {todo.id}
                onRemove = {props.onRemove}
                onToggle = {props.onToggle}
            />
            )
        )}
    </div>
  );
}

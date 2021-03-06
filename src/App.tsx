import React, {useReducer, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {Todo} from './components/Entity';


function createBulkTodos() {
  const array = []
  for ( let i=1; i<=2500; i++){
    const t : Todo = {
      id: i, 
      text: `Todo ${i}`, 
      checked: false
    }
    array.push(t);
  }
  return array;
}

type Action =
  | { type: 'INSERT'; todo: Todo }
  | { type: 'REMOVE'; id: number }
  | { type: 'TOGGLE'; id: number }


function todoReducer(todos:Todo[], action:Action) {
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);          
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map( todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );    
    default:
      return todos;
  }
};

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  const nextId = useRef(0);

  const OnInsert = useCallback( (text:string) => {
      const todo:Todo = {
        id: nextId.current,
        text: text,
        checked: false,
      };
      dispatch( {type:'INSERT', todo} );
      nextId.current += 1;
    },
    [],
  );
  
  const onToggle = useCallback( (id:number) => {
    dispatch( {type:'TOGGLE', id} );
  }, [] );
 
  const onRemove = useCallback( (id:number) => {
      dispatch( {type:'REMOVE', id} );
    },[] );


  return (
    <TodoTemplate>
      <TodoInsert onInsert={OnInsert}/>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
}

export default App;

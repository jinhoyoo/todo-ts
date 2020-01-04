import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = []
  for ( let i=1; i<=2500; i++){
    array.push(
      {
        id: i,
        text: `Todo ${i}`,
        checked: false
      }
    );
  }
  return array;
}


const App: React.FC = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplate>
  );
}

export default App;

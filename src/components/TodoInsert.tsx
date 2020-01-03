import * as React from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

export interface ITodoInsertProps {
}

export default function TodoInsert (props: ITodoInsertProps) {
  return (
    <form className="TodoInsert">
    <input 
        placeholder="할 일을 입력하세요"
    />
    <button type="submit">
        <MdAdd/>
    </button>
    </form>
  );
}

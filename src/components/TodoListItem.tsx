import * as React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoListItem.scss';

export interface ITodoListItemProps {
}

export default function TodoListItem (props: ITodoListItemProps) {
  return (
    <div className="TodoListItem">
        <div className='checkbox'>
            <MdCheckBox/>
            <div className="text">"text"</div>
        </div>
        <div className="remove">
            <MdRemoveCircleOutline/>
        </div>
    </div>
  );
}

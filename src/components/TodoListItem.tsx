import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import  {default as cn} from 'classnames'
import './TodoListItem.scss';
import {Todo} from './Entity';

export interface ITodoListItemProps {
    todo: Todo;
    onToggle: (id:number) => void;
    onRemove: (id:number) => void; 
}

function TodoListItem (props: ITodoListItemProps) {

    const {id, text, checked} = props.todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked}) }
                onClick={() => props.onToggle(id) } >
                {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove"
            onClick={() => props.onRemove(id) } >
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
    }

export default React.memo(TodoListItem);

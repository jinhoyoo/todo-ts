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
    todo: Todo
}

export default function TodoListItem (props: ITodoListItemProps) {

    const {id, text, checked} = props.todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked}) }>
                {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
    }

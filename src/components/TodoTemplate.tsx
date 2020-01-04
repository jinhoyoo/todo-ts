import React, {ReactNode} from 'react';
import './TodoTemplate.scss';

export interface ITodoTemplateProps {
    children: ReactNode 
}

export default function TodoTemplate (props :ITodoTemplateProps) {
  return (
    <div className = "TodoTemplate">
        <div className = "app-title">일정 관리</div>
        <div className = "content">{props.children}</div>
    </div>
  );
}


import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem';

const TodoList = ({todos, onDel, onToggle}) => {
    return (
        <ul className="TodoList">
            {
                todos.map( todos => <TodoItem key={todos.no} todos={todos} onDel={onDel} onToggle={onToggle} />)
            }
        </ul>
    );
};

export default TodoList;
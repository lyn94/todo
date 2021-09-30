import React, { useRef, useState } from 'react';
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    const no = useRef(2)
    const [ todos, setTodos ] = useState([
        {id:1, text: '할 일을 입력해주세요.', done:false}
    ])
    //TodoForm에서 작성하면 내용을 추가
    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                no:no.current++,
                text,
                done:false
            }
        ])
    }

    const onDel = (no) => {
        setTodos(todos.filter( todos => todos.no !== no))
    }

    const onToggle = (no) => {
        setTodos( todos.map( todos => todos.no === no ? {...todos, done:!todos.done}:todos))
    }

    return (
        <div className="Todo">
            <h1>Add new Task</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todo;
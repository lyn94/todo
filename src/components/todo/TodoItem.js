import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const TodoItem = ({todos, onDel, onToggle}) => {
    const { no, text, done } = todos
    return (
        <li className={done ? 'complete' : 'notyet'} >
            <input type="checkbox" onClick={() => onToggle(no)} />
            <label onClick={() => onToggle(no)}></label>
            <em>{text}</em>
            <button onClick={()=>onDel(no)}><AiOutlineClose /></button>
        </li>
        
        
    );
};

export default TodoItem;
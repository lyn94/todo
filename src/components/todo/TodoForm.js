import React, { useRef, useState } from 'react';
import './TodoForm.css'

const TodoForm = ({onAdd}) => {
    //submit 후에포커싱을 위한
    const textRef = useRef('')
    //글자 입력시 상태값 변화
    const [ text, setText ] = useState('')

    // 텍스트를 input에 입력하면 상태 값이 변화
    const inputText = (e) => {
        const { value } = e.target
        setText( value )
    }

    const onSubmit = (e) => {
        // 새로고침되는것막기
        e.preventDefault()
        
        //아무것도 쓰지않으면 추가가 안됨
        if(!text) return

        //내용추가-setText값이초깃값('')으로변화-커서가깜빡임
        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <form className="TodoForm mt20" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={inputText} ref={textRef} />
            <button type="submit">+</button>
        </form>
    );
};

export default TodoForm;
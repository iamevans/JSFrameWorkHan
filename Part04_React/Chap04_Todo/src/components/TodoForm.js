
import React, { useRef, useState } from 'react'

export const TodoForm = (props) => {

    const {addTodo} = props;

    const [text, setText] = useState('');
    const inputField = useRef();

    const changeText = (evt) => {
        setText(evt.target.value);
    }

    const sendData = (evt) => {
        evt.preventDefault();

        if(text === '') return;
        addTodo(text);

        setText('');
        inputField.current.focus();
    }

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control" ref={inputField} value={text} onChange={changeText} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
                </div>
            </div>  
        </form>
    )
    
}

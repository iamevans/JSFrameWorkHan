
import React, { useRef, useState } from 'react'
import { Todolist } from './TodoList';
import { TodoForm } from './TodoForm';

const TodoTemplate = (props) => {

    const sampleTodos = [
        { id: 1, text: '첫 번째 할 일', done: true },
        { id: 2, text: '두 번째 할 일', done: false },
        { id: 3, text: '세 번째 할 일', done: false },
    ];

    const [todoList, setTodoList] = useState(sampleTodos);
    const cnt = useRef(4);

    const updateTodo = (id) => {
        console.log(id);
        let newTodos = todoList.map( (todo) => todo.id === id ? {...todo, done: !todo.done} : todo );
        setTodoList(newTodos);
    }
    const deleteTodo = (id) => {
        console.log(id);
        let newTodos = todoList.filter( (todo) => todo.id !== id );
        setTodoList(newTodos);
    }

    const addTodo = (text) => {
        let todo = {id: cnt.current, text: text, done: false};
        let newTodos = todoList.concat(todo);
        setTodoList(newTodos);

        cnt.current++;
    }


    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm addTodo={addTodo}></TodoForm>
            <br/>
            <Todolist todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></Todolist>

        </div>
    )
}
export default TodoTemplate;
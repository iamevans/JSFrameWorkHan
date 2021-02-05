
import React from 'react'
import './css/todos.css';

export const Todolist = (props) => {

    const { todoList, updateTodo, deleteTodo } = props;

    const todoDOM = todoList.map( (todo) => {
        return <tr key={todo.id}>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done': ''}>{todo.text}</span></td>
            <td>
                <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
        </tr>
    })

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th>Todo</th>
                        <th style={{width:'10%'}}>Complete</th>
                        <th style={{width:'10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoDOM}
                </tbody>
            </table>
        </div>
    )
}

import React from 'react'
import TodoItem from "../myComponents/TodoItem"
export default function Todods(prop) {
    
    return (
        <div className="container">
            <h3 className="mt-5">Todos List</h3>
            {prop.todos.length === 0 ? <p>No todos to display</p> : prop.todos.map(
                (todo) => {return <TodoItem todo = {todo} key = {todo.sno} onDelete = {prop.onDelete}/>}
            )}
            
            
        </div>
    )
}


import React from 'react'

function Todos({todos, deleteTodo}) {
    const todoList=todos.length ? (
        todos.map(todo=>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p>You have no todos</p>
    )
    return (
        <div >
            {todoList}
        </div>
    )
}
export default Todos;

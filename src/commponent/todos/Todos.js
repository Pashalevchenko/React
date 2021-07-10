import React, {Fragment} from "react";

export default function Todos ({todos, isLoading, delTodo}){
    if(isLoading) return <h1>LOADING...</h1>
    return(
        <div>
            {todos.map(todo =>(
                <Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <button onClick={()=> delTodo(todo.id)
                    }>Delite</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}
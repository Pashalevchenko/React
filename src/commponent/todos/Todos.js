import React, {Fragment, useEffect} from "react";
import {addTodos, removeTodo, setLoadingFalse, setLoadingTrue, changeTodo} from "../../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";


export default function Todos ({todos, isLoading}){
    const dispach = useDispatch();

    const fetchTodos = async () => {
        try {
            dispach(setLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos')
            const data = await resp.json()
            dispach(addTodos(data))
        }catch (e) {
            console.log(e)
        }finally {
            dispach(setLoadingFalse())
        }

    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const delTodo = async (id) =>{
        const resp = await fetch('http://localhost:8888/delete-todo/' + id, {
            method: "DELETE",

        })
        await resp.json()
        dispach(removeTodo(id))
        fetchTodos()
    }

    const changeStatus = async (id) =>{
        const resp = await fetch('http://localhost:8888/update-todo/' + id, {
            method:'PATCH',
            body: JSON.stringify({completed: true}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await resp.json()
        console.log(data)
        dispach(changeTodo(id, data))
        fetchTodos()

    }

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
                    <button onClick={()=>changeStatus(todo.id)}>Change status</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}
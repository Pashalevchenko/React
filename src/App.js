import './App.css';
import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {todosReducer} from "./redux/redusers/todos";
import {setLoadingFalse, setLoadingTrue, addTodos, pushTodo, removeTodo } from "./redux/actionCreators";


const СreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const hendleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description || isLoading) return

        try{
        setIsLoading(true)
        await onSubmit(title, description);
        setTitle('')
        setDescription('')
        }catch (e) {
            console.log(e)
        }finally {
            setIsLoading(false)
        }

    }
    return (
        <form onSubmit={hendleSubmit}>
            <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
                   placeholder='to do title'/>
            <br/>
            <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)}
                   placeholder='to do description'/>
            <br/>
            <button type='submit' disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}
const Todos = ({todos, isLoading, todoDel}) => {
    if(isLoading) return <h1>LOADING...</h1>
    return(
        <div>
            {todos.map(todo =>(
                <Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <button onClick={()=> todoDel(todo.id)
                    }>Delite</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}

function App() {
    const {todos, todosLoading} = useSelector(store => store.todosReducer);
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

    const onTodoCreate = async (title, description) =>{
        if (!title || !description) return;

        const resp =await fetch('http://localhost:8888/create-todo', {
            method: "POST",
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()

        dispach(pushTodo(data))
        // fetchTodos()
        // console.log(data, "noTodoCreate")

    }
    const delTodo = async (id) =>{
        const resp =await fetch('http://localhost:8888/delete-todo/' + id, {
            method: "DELETE",
        })
      await resp.json()

        dispach(removeTodo(id))
        // fetchTodos()
        // console.log(data, "noTodoCreate")

    }
       const todoDel = (id)=> dispach(delTodo(id))

    return (
        <div>
            <СreateTodoForm onSubmit={onTodoCreate}/>

            <Todos todos={todos} isLoading={todosLoading} todoDel={todoDel}/>
        </div>
    );
}

export default App;

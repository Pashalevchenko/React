import './App.css';
import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {todosReducer} from "./redux/redusers/todos";
import {setLoadingFalse, setLoadingTrue, addTodos, pushTodo, removeTodo } from "./redux/actionCreators";
import Todos from "./commponent/todos/Todos";
import TodosForm from "./commponent/todosForm/TodosForm";

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
        const resp = await fetch('http://localhost:8888/delete-todo/' + id, {
            method: "DELETE",
        })
      await resp.json()
        dispach(removeTodo(id))
        fetchTodos()
    }



    return (
        <div>
            {/*<СreateTodoForm onSubmit={onTodoCreate}/>*/}
            <TodosForm onSubmit={onTodoCreate}/>

            <Todos todos={todos} isLoading={todosLoading} delTodo={delTodo}/>
        </div>
    );
}

export default App;

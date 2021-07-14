import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {pushTodo} from "./redux/actionCreators";
import Todos from "./commponent/todos/Todos";
import TodosForm from "./commponent/todosForm/TodosForm";

function App() {
    const {todos, todosLoading} = useSelector(store => store.todosReducer);
    const dispach = useDispatch();

    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: "POST",
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();
        dispach(pushTodo(data));
    }

    return (
        <div>
            {/*<СreateTodoForm onSubmit={onTodoCreate}/>*/}
            <TodosForm onSubmit={onTodoCreate}/>
            <Todos todos={todos} isLoading={todosLoading}/>
        </div>
    );
}

export default App;

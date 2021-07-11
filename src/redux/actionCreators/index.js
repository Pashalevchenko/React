import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    DELITE, CHANGE_TODO,
} from '../actionTyps'


export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const addTodos = (payload) => ({type: ADD_TODOS, payload});
export const pushTodo = (payload) => ({type: PUSH_TODO, payload});
export const removeTodo = (id) => ({type: DELITE, id});
export const changeTodo = (id, data) => ({type: CHANGE_TODO, id, data});
// export const pushTodo = (payload) => ({type: LOADING_FALSE, payload});
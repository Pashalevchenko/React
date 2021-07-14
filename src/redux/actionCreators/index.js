import {ADD_TODOS, CHANGE_TODO, DELITE, LOADING_FALSE, LOADING_TRUE, PUSH_TODO,} from '../actionTyps'

export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const addTodos = (payload) => ({type: ADD_TODOS, payload});
export const pushTodo = (payload) => ({type: PUSH_TODO, payload});
export const removeTodo = (id) => ({type: DELITE, id});
export const changeTodo = (id, data) => ({type: CHANGE_TODO, id, data});
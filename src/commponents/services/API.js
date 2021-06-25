// const getUsers = ()=>{
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
// }
//
// const getUser = (id)=>{
//     return fetch('https://jsonplaceholder.typicode.com/users' + id)
//         .then(value => value.json())
// }
//
// export {getUser, getUsers}

import axios from "axios";
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = ()=> axiosInstance.get()
const getUser = (id)=> axiosInstance.get(id)
export {getUser, getUsers}
import axios from "axios";
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = ()=> axiosInstance()
const getUser = (id)=> axiosInstance('/' +id)
export {getUser, getUsers}
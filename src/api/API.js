import axios from 'axios'
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})
let getUsers = ()=> axiosInstance()
let getUserPosts = (id) => axiosInstance('/' + id + '/posts')
export {getUserPosts, getUsers}
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})

const getUsers = ()=> axiosInstance()
const getUserPosts = (id) => axiosInstance('/' + id + '/posts')

export {getUserPosts, getUsers}
import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance('/users');
const getUsersPost = (id) => axiosInstance('/users/' + id + '/posts' );
const getPosts = () => axiosInstance('/posts');
const getComments = () => axiosInstance('/comments');
const getPostComment = (id) => axiosInstance('/post/' + id + '/comments');

export {getUsers, getUsersPost, getPosts, getComments, getPostComment};



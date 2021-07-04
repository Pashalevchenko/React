import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => axiosInstance();
const getUsersPosts = (id) => axiosInstance('/' + id);
export {getUsers, getUsersPosts};
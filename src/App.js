import {getUserPosts, getUsers} from "./api/API";
import {useEffect, useState} from "react";
import Users from "./users/Users";
import Posts from "./posts/Posts";
export default function App (){
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([])
    useEffect(()=>{
        getUsers().then(response =>{
            setUsers(response.data)
        })
    },[])
    function userPost(id) {
        getUserPosts(id).then(value => setPosts(value.data))
    }
    return(
        <div>
            <Users item={users} userPost={userPost}/>
            <hr/>
            <hr/>
            <hr/>
            {
                setPosts && <Posts item={posts}/>
            }
        </div>
    )
}
import {getUserPosts, getUsers} from "./services/api/API";
import {useEffect, useState} from "react";
import Users from "./commponents/users/Users";
import Posts from "./commponents/posts/Posts";

export default function App (){

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([])

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
            {
                setPosts && <Posts item={posts}/>
            }
        </div>
    )
}
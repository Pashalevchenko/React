import {useEffect, useState} from "react";
import {getUsersPost} from "../service/User_API";
import Post from "../post/Post";

export default function AllPosts({location: {state}}) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        getUsersPost(state.id).then(response => {
            setPost(response.data)
        })
    }, []);

    return (
        <div>
            {
                post.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    )
}

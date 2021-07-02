import {getPosts} from "../../service/api/API";
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts (){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getPosts().then(response =>{
            setPosts(response.data)
        })
    })

    return(
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    )
}

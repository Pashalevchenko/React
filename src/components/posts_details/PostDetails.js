import {useEffect, useState} from "react";

export default function PostDetails ({location:{state}}){
    const [post, setPost] = useState([]);
    useEffect(()=>{
        setPost({...state})
    },[state])
    return(
        <div>

                <p>Body: {post.body}</p>
                <p>Id: {post.id}</p>
                <p>title: {post.title}</p>
                <p>Body: {post.body}</p>

        </div>
    )
}
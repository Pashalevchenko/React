import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Post from "../post/Post";

export default function Posts (props){
    const disptach = useDispatch()
    const posts = useSelector(({posts}) => posts)
    const fechPost = async ()=> {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        console.log(data)
        disptach({
            type: 'POSTS',
            payload: data
        })
    }
    useEffect(()=>{
        fechPost()
    },[])

    console.log(posts)
    return(
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    )
}
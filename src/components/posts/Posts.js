import {getPosts} from '../service/api/Post_API';
import {useEffect, useState} from "react";
import Post from "../post/Post";
import PostDetails from "../posts_details/PostDetails";
import {Route} from "react-router-dom";
import "./Posts.css";

export default function Posts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, []);

    return (
        <div className='container'>
            <div className='container__post'>
                {
                    posts.map(post => <Post post={post} key={post.id}/>)
                }
            </div>

            <div className='post_detail'>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </div>
        </div>
    )
}
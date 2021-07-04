import {Link} from "react-router-dom";
import "./Post.css";

export default function Post({post}) {
    return (
        <div className='post'>
            {post.id} - {post.title} <Link className='Link' to={
            {
                pathname: '/posts/' + post.id,
                state: post
            }
        }>More</Link>
        </div>
    )
}


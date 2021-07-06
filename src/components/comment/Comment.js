import {Link} from "react-router-dom";
import './comment.css';

export default function Comment({comment}) {
    return (
        <div className='comment'>
            {comment.id} - {comment.name} <Link className='comment_link' to={{pathname: '/comments/' + comment.id, state: comment}
        }>More</Link>
        </div>
    )
}
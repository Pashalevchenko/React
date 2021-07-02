import {getPostComment} from '../../service/api/API';
import {useState} from "react";
import UserPostComment from "../userPostComment/UserPostComment";

export default function UserPostComments ({item}){
    const [postComments, setPostComments] = useState([]);

    return(
        <div>
            <div className='post_containet'>
                <div> {item.title}</div> -
                <button onClick={() => getPostComment(item.id).then(value => setPostComments([...value.data]))}>
                    Post comments
                </button>
            </div>
            {
                postComments.map(value => <UserPostComment post={value} key={value.id}/>)
            }
        </div>
    )
}

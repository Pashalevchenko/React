import {getComment} from "../service/api/CommetnApi";
import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {Route, Switch} from "react-router-dom";
import CommentDetail from "../comment_detail/CommentDetail"
import "./Comments.css"

export default function Comments(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComment().then(response => setComments(response.data))
    }, []);

    return (
        <div className='container'>
            <div className='container_comment'>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>

            <div className='comments_details'>
                <Switch>
                    <Route path={'/comments/:id'} component={CommentDetail}/>
                </Switch>
            </div>

        </div>
    )
}
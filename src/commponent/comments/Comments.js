import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Comment from "../comment/Comment";

export default function Comments(props) {
    const dispatch = useDispatch();
    const comments = useSelector(({comments}) => comments);

    const fetchUser = async () => {
        const dataComment = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json();
        dispatch({
            type: 'COMMENT',
            payload: dataComment
        })
    };

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    )
}
import {getUsersPost} from "../../service/api/API";
import {useState} from "react";
import UserPostComments from "../userPostComments/UserPostComments";
import './User.css';

export default function User ({item}){
const [userPost, setUserPost] = useState([])

    return(
        <div>
            <div className='containet'>
                <div>{item.name}</div> -
                <button onClick={() => getUsersPost(item.id).then(value => setUserPost([...value.data]))}>
                    Get user posts
                </button>

            </div>
            {
                userPost.map(value => <UserPostComments item={value} key={value.id}/>)
            }
        </div>
    )

}

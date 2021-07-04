import {Link} from "react-router-dom";
import './User.css';

export default function User({item}) {

    return (
        <div className='user'>
            {item.id} - {item.name} -- <Link className='user_link' to={
            {
                pathname: '/users/' + item.id,
                state: item
            }
        }>More</Link>
        </div>
    )
}
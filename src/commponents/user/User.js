import {Link} from "react-router-dom";

export default function User({user}) {
    return (
        <div>
            <p>{user.name}</p> -
            <Link to={{ pathname: '/users/' + user.id + '/allposts', state: user }}>Posts</Link>
        </div>
    )
}

import {Link} from "react-router-dom";

export default function User ({item}){
    return(
        <div>
            {item.id} - {item.name} -- <Link to={
                {
                    pathname: '/users/'+item.id,
                    state: item
                }
            }>More</Link>
        </div>
    )
}
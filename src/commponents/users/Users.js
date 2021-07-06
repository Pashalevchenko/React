import { Route } from "react-router-dom";
import { getUsers } from "../service/User_API";
import { useEffect, useState } from "react";
import User from "../user/User";
import AllPosts from "../allposts/AllPosts";

export default function Users (){
    const [user, setUser] = useState([]);

    useEffect(()=>{
        getUsers().then(response => {
            setUser([...response.data])
        })
    },[]);

    return(
        <div>
            {
                user.map(user => <User key={user.id} user={user}/>)
            }

            <Route path={'/users/:id/allposts'} component={AllPosts}/>
        </div>
    )
}

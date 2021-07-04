import {getUsers} from "../service/api/User_API"
import {useEffect, useState} from "react";
import User from "../user/User";
import UserDetails from "../user_details/UserDetails";
import {Route, Switch} from "react-router-dom";
import './Users.css';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response => {
            setUsers([...response.data])
        })
    })

    return (
        <div className='container'>
            <div className='container_user'>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>

            <div className='comments_user'>
                <Switch>
                    <Route path={'/users/:id'} component={UserDetails}/>
                </Switch>
            </div>
        </div>
    )
}
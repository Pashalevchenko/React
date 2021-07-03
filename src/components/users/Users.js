import {getUsers} from "../service/api/User_API"
import {useEffect, useState} from "react";
import User from "../user/User";
import UserDetails from "../user_details/UserDetails";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function Users (){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(response => {
            setUsers([...response.data])
        })
    })

    return(
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }

            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>
    )
}
import User from "../user/User";
import {getUsers} from "../../service/api/API";
import {useEffect, useState} from "react";

export default function Users (){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers().then(response =>{
            setUsers(response.data)
        })
    })

    return(
        <div>
            {
                users.map(user => <User item={user} key={user.id}/>)
            }
        </div>
    )
}


